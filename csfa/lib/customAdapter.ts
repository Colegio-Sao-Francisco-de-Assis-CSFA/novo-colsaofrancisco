import { Adapter, VerificationToken } from "next-auth/adapters";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export function CustomAdapter(): Adapter {
  return {
    async createUser(user: any) { // Definir um tipo adequado para 'user' se possível
      const res = await fetch(`${BACKEND_URL}/usuarios`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });
      return res.json();
    },

    async getUserByEmail(email: string) {
      try {
        const res = await fetch(`${BACKEND_URL}/usuarios/email?email=${email}`);
        if (!res.ok) return null;
        return await res.json();
      } catch (error) {
        console.error("Erro ao buscar usuário por e-mail:", error);
        return null;
      }
    },

    async createVerificationToken(token: VerificationToken): Promise<VerificationToken | null> {
      try {
        const res = await fetch(`${BACKEND_URL}/usuarios/save-token`, {
          method: "POST",
          body: JSON.stringify(token),
          headers: { "Content-Type": "application/json" },
        });
        if (!res.ok) return null;
        return token; // Retornamos o token conforme esperado pelo NextAuth
      } catch (error) {
        console.error("Erro ao salvar o token de verificação:", error);
        return null;
      }
    },

    async useVerificationToken({ identifier, token }: { identifier: string; token: string }) {
      try {
        const res = await fetch(`${BACKEND_URL}/usuarios/verify-token?identifier=${identifier}&token=${token}`, {
          method: "DELETE",
        });
        if (!res.ok) return null;
        return await res.json();
      } catch (error) {
        console.error("Erro ao usar o token de verificação:", error);
        return null;
      }
    },

    // Outros métodos podem ser implementados conforme necessário
  };
}
