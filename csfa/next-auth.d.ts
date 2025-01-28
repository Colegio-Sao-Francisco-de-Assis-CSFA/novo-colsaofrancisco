// next-auth.d.ts

import { DefaultSession } from "next-auth";

// Extende a tipagem do usuário e da sessão
declare module "next-auth" {
  interface User {
    id: string; // Adiciona o campo `id` ao usuário
    setor: string; // Adiciona o campo `setor` ao usuário
  }

  interface Session {
    user: User; // Agora a sessão contém o campo `user` com `id` e `setor`
  }
}
