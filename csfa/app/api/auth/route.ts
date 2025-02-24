import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        try {
          const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google-login`, {
            email: user.email,
          });

          if (res.data.token) {
            user.id = res.data.id || "0"; // Garante que sempre tenha um ID
            user.setor = res.data.setor || "PADRAO"; // Define um setor padrão
            return true;
          }
          return false;
        } catch (error) {
          console.error("Erro na autenticação Google:", error);
          return false;
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = token.accessToken || "";
        token.setor = user.setor ?? "PADRAO"; // Define um setor padrão
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken ?? ""; // Garante que sempre seja string
      session.user.setor = token.setor ?? "PADRAO"; // Define setor na sessão
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET!,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
