import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma/prisma"; // Certifique-se de que o caminho está correto

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: '/sistema/login', // Personalize a URL de login, se necessário
    error: '/sistema/login',   // Caso haja erro, redireciona para a página de login
  },
  session: {
    jwt: true,  // Usando JSON Web Tokens para sessão
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account?.provider === 'google') {
        // Preenchendo o token com os dados da conta
        token.id = account.id;
        token.email = account.email;

        // Verificando se o perfil já existe e adicionando o "setor" no token
        const user = await prisma.usuario.findUnique({
          where: { email: account.email },
        });

        // Adicionando o setor do usuário ao token, caso encontrado
        if (user?.setor) {
          token.setor = user.setor;
        }
      }
      return token;
    },
    async session({ session, token }) {
      // Garantindo que a sessão também tenha o setor e id
      if (token) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.setor = token.setor as string;
      }
      return session;
    },
  },
});
