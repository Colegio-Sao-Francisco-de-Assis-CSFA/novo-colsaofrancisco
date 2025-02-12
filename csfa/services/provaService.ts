import prisma from "@/lib/db/prisma";
import { Prova, Questao } from "@/types";

export const ProvaService = {
  async criarProva(data: {
    nome: Prova["nome"];
    type: Prova["type"];
    tag: Prova["tag"];
    category: Prova["category"];
    nivel: Prova["nivel"];
    dificuldade: string;
    questoesIds?: Questao["id"][];
  }) {
    const { nome, type, tag, category, nivel, dificuldade, questoesIds } = data;

    const prova = await prisma.prova.create({
      data: {
        nome,
        type,
        tag,
        category,
        nivel,
        dificuldade,
        status: "RASCUNHO",
        questoes: {
          create: questoesIds?.map((questaoId) => ({
            questao: { connect: { id: questaoId } },
          })),
        },
      },
      include: {
        questoes: {
          include: { questao: true },
        },
      },
    });

    return prova;
  },

  async listarProvas() {
    const provas = await prisma.prova.findMany({
      include: {
        questoes: {
          include: { questao: true },
        },
      },
    });

    return provas;
  },

  async atualizarProva(id: string, data: Partial<Omit<typeof ProvaService["criarProva"], "id">>) {
    return prisma.prova.update({
      where: { id },
      data: {
        ...data,
        questoes: data.questoesIds
          ? {
              set: [], // Remove relações anteriores
              create: data.questoesIds.map((questaoId) => ({
                questao: { connect: { id: questaoId } },
              })),
            }
          : undefined,
      },
    });
  },
};
