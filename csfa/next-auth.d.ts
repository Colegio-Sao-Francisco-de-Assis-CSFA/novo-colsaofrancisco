import NextAuth, { DefaultSession, DefaultUser } from 'next-auth';

// Define um tipo personalizado para o usuário com a propriedade `setor`
declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string;
      setor?: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string;
    setor?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    setor?: string;
  }
}
