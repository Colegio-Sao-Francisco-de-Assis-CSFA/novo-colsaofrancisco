const prisma = require("../config/database");

const provasModel = {
  // Listar todas as provas com filtros opcionais
  async listarProvas(filtros) {
    const { categoria, disciplina, dificuldade } = filtros || {};
    return await prisma.prova.findMany({
      where: {
        ...(categoria && { categoria }),
        ...(disciplina && { disciplina }),
        ...(dificuldade && { dificuldade }),
      },
      include: { questoes: true }, // Relacionamento com questões (exemplo)
    });
  },

  // Criar uma nova prova
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

  // Atualizar uma prova
  async atualizarProva(id, dados) {
    if (dados.questoes) {
      // Atualizar relação com questões (exemplo)
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
      data: {
        ...dados,
      },
      include: { questoes: true },
    });
  },

  // Buscar uma prova pelo ID
  async buscarProvaPorId(id) {
    return await prisma.prova.findUnique({
      where: { id },
      include: { questoes: true },
    });
  },

  // Excluir uma prova
  async excluirProva(id) {
    return await prisma.prova.delete({ where: { id } });
  },
};

module.exports = provasModel;
