import NextAuth, { DefaultSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";
import { NextAuthOptions } from "next-auth";

// Extensão do tipo User
declare module "next-auth" {
  interface User {
    id: string;
    role: string;
    setor?: string | null;
  }
  interface Session extends DefaultSession {
    user: DefaultSession["user"] & {
      id: string;
      role: string;
      setor?: string | null;
    };
  }
  interface JWT {
    id: string;
    role: string;
    setor?: string | null;
  }
}

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user.email || !user.email.endsWith("@colsaofrancisco.com.br")) {
        return false;
      }

      try {
        const response = await axios.post(`${BACKEND_URL}/auth/sign-in`, { email: user.email });
        if (!response.data.valid) {
          throw new Error("e-mail não cadastrado, informe ao administrador");
        }

        user.id = response.data.id;
        user.role = response.data.role;
        user.setor = response.data.setor ?? null;
      } catch (error: any) {
        throw new Error(error.message || "Erro ao validar e-mail");
      }
      return true;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          role: token.role,
          setor: token.setor ?? null,
        },
      };
    },
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.setor = user.setor ?? null;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 12 * 60 * 60,
  },
  pages: {
    signIn: "/sign-in",
  },
  events: {
    async session({ session }) {
      try {
        const response = await axios.get(`${BACKEND_URL}/auth/check-session`, {
          headers: { Authorization: `Bearer ${session.user.id}` },
        });
        if (!response.data.sessionActive) {
          throw new Error("Sessão expirada");
        }
      } catch (error) {
        throw new Error("Erro ao verificar sessão");
      }
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };