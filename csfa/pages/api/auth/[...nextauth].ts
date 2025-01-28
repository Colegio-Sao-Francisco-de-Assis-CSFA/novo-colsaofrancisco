import NextAuth, { NextAuthOptions, User, Session, DefaultSession } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '@/lib/prisma/prisma';
import { JWT } from 'next-auth/jwt';

// Estende o tipo User do NextAuth para incluir setor
interface CustomUser extends User {
  setor: string;
}

// Estende o tipo Session do NextAuth
declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      setor?: string;
    } & DefaultSession['user']
  }

  interface User {
    setor: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async signIn({ user, account, profile }) {
      const emailDomain = user.email?.split('@')[1];

      if (emailDomain !== 'colsaofrancisco.com.br') {
        return false;
      }

      const existingUser = await prisma.usuario.findUnique({
        where: {
          email: user.email!,
        },
      });

      if (!existingUser) {
        return false;
      }

      (user as CustomUser).setor = existingUser.setor;

      return true;
    },

    async session({ session, token, user }) {
      if (token?.sub) {
        const dbUser = await prisma.usuario.findUnique({
          where: {
            email: session.user.email!,
          },
        });

        if (dbUser) {
          session.user.setor = dbUser.setor;
        }
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.setor = (user as CustomUser).setor;
      }
      return token;
    },

    async redirect({ url, baseUrl }) {
      const userEmail = url.includes('?') ? 
        new URLSearchParams(url.split('?')[1]).get('email') : 
        null;

      if (!userEmail) return baseUrl;

      const user = await prisma.usuario.findUnique({
        where: {
          email: userEmail,
        },
      });

      if (user?.setor === 'admin') {
        return `${baseUrl}/sistema/dashboard/admin`;
      }

      if (user?.setor === 'designer') {
        return `${baseUrl}/sistema/dashboard/designer`;
      }

      if (user?.setor === 'professor') {
        return `${baseUrl}/sistema/dashboard/professor`;
      }

      return baseUrl;
    },
  },
  pages: {
    signIn: '/sistema/login',
    error: '/sistema/login',
  },
  session: {
    strategy: 'jwt',
  },
};

export default NextAuth(authOptions);