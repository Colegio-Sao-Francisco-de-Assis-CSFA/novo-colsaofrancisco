import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../lib/prisma/prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      // authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?response_type=code&prompt=consent',
    }),
  ],
  callbacks: {
    // SignIn Function
    async signIn({ user, account }) {
      if (account?.provider === 'google') {
        console.log('Account:', account); // Verifique a estrutura da conta

        if (!account.providerAccountId) {
          console.error('Error: account.providerAccountId is missing');
          return false; // Retorne falso para evitar o login caso `account.providerAccountId` esteja ausente
        }

        const providerAccountId = account.providerAccountId as string;

        // Garante que o usuário é criado ou atualizado
        const dbUser = await prisma.user.upsert({
          where: { email: user.email ?? "" },
          update: {
            name: user.name ?? "",
            image: user.image ?? "",
          },
          create: {
            email: user.email ?? "",
            name: user.name ?? "",
            image: user.image ?? "",
          },
        });

        // Vincula a conta Google
        await prisma.account.upsert({
          where: {
            provider_providerAccountId: {
              provider: 'google',
              providerAccountId: providerAccountId,
            },
          },
          update: {},
          create: {
            userId: dbUser.id,
            provider: 'google',
            providerAccountId: providerAccountId,
            access_token: account.access_token,
            refresh_token: account.refresh_token,
            expires_at: account.expires_at,
            id_token: account.id_token,
          },
        });
      }
      return true; // Permite a continuação do login
    },

    // JWT Function
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.setor = user.setor || '';
      }
      return token;
    },

    // Session verify function
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.setor = token.setor || '';
      }
      return session;
    },

    // Redirect Function
    async redirect({ url, baseUrl }) {
      // Evitar redirecionamento para URLs externas
      if (url.startsWith(baseUrl)) {
       
        return url;
      }
      return `${baseUrl}/api/auth/callback?callbackUrl=${encodeURIComponent(url)}`;
    }



  },
  session: {
    strategy: "jwt", // ou "database" dependendo de como você configura
  },
  pages: {
    signIn: "/sistema/login",
    error: "/sistema/solicite-ao-administrador",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
