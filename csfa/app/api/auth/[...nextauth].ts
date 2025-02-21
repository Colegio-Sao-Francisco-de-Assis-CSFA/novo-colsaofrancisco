import NextAuth, { AuthOptions } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { DefaultSession } from "next-auth";

const prisma = new PrismaClient();

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      setor?: string;
    } & DefaultSession["user"];
  }
}


export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: { prompt: "select_account", access_type: "offline", response_type: "code" },
      },
    }),
  ],
  callbacks: {

    async signIn({ user, account, profile }) {

      if (!profile || !profile.email) { return false; }

      const emailDomain = profile.email.split("@")[1];
      const allowedDomains = ["colsaofrancisco.com.br"];

      if (!allowedDomains.includes(emailDomain)) {
        return false;
      }

      return true;
    },

    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;

        try {
          // 🔹 Buscar setor pelo email no backend
          const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/usuarios?email=${session.user.email}`);

          if (!response.ok) throw new Error("Erro ao buscar setor");

          const userData = await response.json();
          session.user.setor = userData.setor || "Setor não informado";
        } catch (error) {
          console.error("Erro ao buscar setor:", error);
          session.user.setor = "Erro ao carregar setor";
        }
      }
      return session;
    },
  },
  session: { strategy: "jwt" },
  pages: { signIn: "/sign-in" },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  return NextAuth(req, res, authOptions);
}
