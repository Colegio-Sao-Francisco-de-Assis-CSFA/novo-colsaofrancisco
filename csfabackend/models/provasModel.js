const prisma = require("../config/database");

const provaModel = {
  async listarProvas(filtros) {
    return await prisma.prova.findMany({
      where: {
        ...(filtros.categoria && { categoria: filtros.categoria }),
        ...(filtros.disciplina && { disciplina: filtros.disciplina }),
        ...(filtros.dificuldade && { dificuldade: filtros.dificuldade }),
      },
      include: { questoes: true },
    });
  },

  async buscarProvaPorId(id) {
    return await prisma.prova.findUnique({
      where: { id },
      include: { questoes: true },
    });
  },

  async criarProva(dados) {
    return await prisma.prova.create({
      data: {
        ...dados,
        questoes: {
          create: dados.questoes.map((q) => ({
            questaoId: q.id,
            ordem: q.ordem,
          })),
        },
      },
      include: { questoes: true },
    });
  },

  async atualizarProva(id, dados) {
    if (dados.questoes) {
      await prisma.provaQuestao.deleteMany({ where: { provaId: id } });
      await prisma.provaQuestao.createMany({
        data: dados.questoes.map((q) => ({
          provaId: id,
          questaoId: q.id,
          ordem: q.ordem,
        })),
      });
    }

    return await prisma.prova.update({
      where: { id },
      data: { ...dados },
      include: { questoes: true },
    });
  },

  async excluirProva(id) {
    return await prisma.prova.delete({ where: { id } });
  },
};

module.exports = provaModel;
