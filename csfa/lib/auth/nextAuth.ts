import NextAuth, { NextAuthOptions, User, Session } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma  from "../db/prisma";
import { userService } from "@/services/userService";
import { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: parseInt(process.env.EMAIL_SERVER_PORT as string, 10),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {

    async session({ session, token }: { session: Session; token: JWT }) {
      if (token.sub) session.user.id = token.sub;
      return session;
    },
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) token.sub = user.id;
      return token;
    },

  },
  pages: {
    signIn: "/sign-in",
  }
};

export default NextAuth(authOptions);
