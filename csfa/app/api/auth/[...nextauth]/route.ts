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
  debug: true,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user }) {
        console.log("Usuário tentando logar:", user);

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
    },
    async session({session, token}){
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id || "", // 🔹 Evita erro caso ainda esteja indefinido
          role: token.role || "user",
          setor: token.setor ?? null,
        },
      };
    }
  async jwt({ token, account, user }){

      if (account) {
        token.accessToken = account.access_token;
      }

      if (user && user.id) { // ✅ Garante que user.id existe antes de atribuir
        token.id = user.id;
        token.role = user.role || "user"; // 🔹 Defina um valor padrão se estiver indefinido
        token.setor = user.setor ?? null;
      }

      return token;
  },
  session:{
    strategy: "jwt",
    maxAge: 12 * 60 * 60,
  },
  pages:{
    signIn: "/sign-in",
  },
  events: {
    async session({ session }) {
      try {
        const response = await axios.post(`${BACKEND_URL}/auth/sign-in`, { email: session.user.email });
        console.log("Resposta do backend:", response.data);
        if (!response.data.valid) {
            throw new Error("e-mail não cadastrado, informe ao administrador");
        }
    } catch (error: any) {
        console.error("Erro no login:", error.response?.data || error.message);
        throw new Error(error.message || "Erro ao validar e-mail");
    }
    },
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };