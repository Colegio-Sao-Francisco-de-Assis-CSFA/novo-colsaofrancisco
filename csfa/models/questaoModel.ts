import prisma from "@/lib/db/prisma";


export const questaoModel = {
  async listarQuestoes() {
    return await prisma.questao.findMany();
  },

  async criarQuestao(data: { nome: string; conteudo: string; tag: string; type: string }) {
    return await prisma.questao.create({
      data,
    });
  },

  async atualizarQuestao(id: string, data: Partial<{ nome: string; conteudo: string; tag: string; type: string }>) {
    return await prisma.questao.update({
      where: { id },
      data,
    });
  },

  async deletarQuestao(id: string) {
    return await prisma.questao.delete({
      where: { id },
    });
  },
};
