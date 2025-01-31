import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../db/prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        if (!account.providerAccountId) {
          return false; // Bloqueia o login se o ID não estiver presente
        }

        const providerAccountId = account.providerAccountId;
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email! },
        });

        // Se não encontrar o usuário, cria um novo
        if (!existingUser) {
          const newUser = await prisma.user.create({
            data: {
              email: user.email!,
              name: user.name!,
              image: user.image ?? "",
              setor: user.setor ?? "", // Assumindo que "setor" é um campo adicional
            },
          });

          await prisma.account.create({
            data: {
              userId: newUser.id,
              provider: "google",
              providerAccountId: providerAccountId,
              accessToken: account.access_token,
              refreshToken: account.refresh_token,
              expiresAt: account.expires_at,
              idToken: account.id_token,
            },
          });

          return true; // Prosseguir com a autenticação
        } else {
          // Se encontrar, atualiza os dados do usuário
          await prisma.user.update({
            where: { email: user.email! },
            data: {
              name: user.name ?? existingUser.name,
              image: user.image ?? existingUser.image,
              setor: user.setor ?? existingUser.setor,
            },
          });

          // Garantir que a conta do Google seja associada ao usuário
          await prisma.account.upsert({
            where: {
              provider_providerAccountId: {
                provider: "google",
                providerAccountId,
              },
            },
            update: {
              accessToken: account.access_token,
              refreshToken: account.refresh_token,
              expiresAt: account.expires_at,
              idToken: account.id_token,
            },
            create: {
              userId: existingUser.id,
              provider: "google",
              providerAccountId: providerAccountId,
              accessToken: account.access_token,
              refreshToken: account.refresh_token,
              expiresAt: account.expires_at,
              idToken: account.id_token,
            },
          });
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.setor = user.setor ?? token.setor ?? ""; // Mantém o valor existente se já estiver definido
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.setor = token.setor ?? ""; // Não sobrescreve valores já existentes
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) {
        return url;
      }
      return baseUrl;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sistema/login",
    error: "/sistema/solicite-ao-administrador",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
