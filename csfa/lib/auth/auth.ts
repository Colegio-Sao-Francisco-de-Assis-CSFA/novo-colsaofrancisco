import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/lib/prisma/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        // Verifica se o usuário existe no banco de dados
        const dbUser = await prisma.usuario.findUnique({
          where: { email: user.email || "" },
        });

        if (!dbUser) {
          throw new Error(
            "Usuário não encontrado. Contate o administrador para ser cadastrado."
          );
        }

        if (!dbUser.emailVerified) {
          throw new Error("E-mail não verificado. Verifique sua caixa de entrada.");
        }

        // Adiciona o id e setor ao usuário
        user.id = dbUser.id;
        user.setor = dbUser.setor;

        return true; // Permite o login
      } catch (error) {
        console.error("Erro no login:", error);
        return false; // Bloqueia o login em caso de erro
      }
    },

    async session({ session, token }) {
      // Verifica se o token contém dados do usuário
      if (token) {
        session.user.id = token.id as string; // Adiciona o ID do usuário à sessão
        session.user.setor = token.setor as string; // Adiciona o setor à sessão
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Adiciona o ID do usuário ao token JWT
        token.setor = user.setor; // Adiciona o setor ao token JWT
      }
      return token;
    },
  },
  pages: {
    signIn: "/sistema/login", // Página de login personalizada
    error: "/sistema/login",  // Redireciona para a página de login em caso de erro
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET, // Configura o segredo do JWT
  },
  secret: process.env.NEXTAUTH_SECRET, // Define o segredo geral do NextAuth
};
