import prisma from "@/lib/db/prisma"; // Importa o Prisma Client
import { Prisma } from "@prisma/client";

export const questaoModel = {

  async listar() {
    return await prisma.questao.findMany();
  },

  async buscarPorId(id: string) {
    return await prisma.questao.findUnique({ where: { id } });
  },


  async criar(data: Omit<Prisma.QuestaoCreateInput, "provas"> & { provas?: string[] }) {
    return await prisma.questao.create({
      data: {
        ...data,
        provas: data.provas?.length
          ? {
              createMany: {
                data: data.provas.map((provaId) => ({
                  provaId, // 🔥 Insere na tabela intermediária
                })),
              },
            }
          : undefined,
      },
    });
  },

  async  atualizar(id: string, data: Partial<Omit<Prisma.QuestaoUpdateInput, "provas">> & { provas?: string[] }) {
    return await prisma.questao.update({
      where: { id },
      data: {
        ...data,
        provas: data.provas?.length
          ? {
              deleteMany: {}, // 🔥 Remove todos os vínculos antigos
              createMany: {
                data: data.provas.map((provaId) => ({
                  provaId, // 🔥 Insere os novos vínculos
                })),
              },
            }
          : undefined,
      },
    });
  },
  

  async deletar(id: string) {
    return await prisma.questao.delete({ where: { id } });
  },
  
};
