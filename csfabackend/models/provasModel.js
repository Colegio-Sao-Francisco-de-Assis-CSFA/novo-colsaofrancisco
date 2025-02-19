import prisma from "../config/database";

const ProvaModel = {
  // Listar provas com filtros opcionais
  async listarProvas(filtros) {
    const { categoria, disciplina, dificuldade, tipo } = filtros;
    return await prisma.prova.findMany({
      where: {
        ...(categoria && { category: categoria }),
        ...(disciplina && { disciplina }),
        ...(dificuldade && { dificuldade }),
        ...(tipo && { type: tipo }),
      },
      include: {
        questoes: true,
      },
    });
  },

  // Criar uma nova prova
  async criarProva(dados) {
    const { nome, type, disciplina, category, nivel, dificuldade, questoes, duracaoTotal } = dados;
    return await prisma.prova.create({
      data: {
        nome,
        type,
        disciplina,
        category,
        nivel,
        dificuldade,
        duracaoTotal,
        questoes: {
          create: questoes.map((q, index) => ({
            questaoId: q.id,
            ordem: index + 1,
          })),
        },
      },
      include: { questoes: true },
    });
  },

  // Atualizar uma prova
  async atualizarProva(id, dados) {
    const { nome, type, disciplina, category, nivel, dificuldade, questoes, duracaoTotal } = dados;

    // Remove as relações antigas (se houverem questões novas)
    if (questoes) {
      await prisma.provaQuestao.deleteMany({ where: { provaId: id } });
      await prisma.provaQuestao.createMany({
        data: questoes.map((q, index) => ({
          provaId: id,
          questaoId: q.id,
          ordem: index + 1,
        })),
      });
    }

    // Atualiza os dados da prova
    return await prisma.prova.update({
      where: { id },
      data: {
        nome,
        type,
        disciplina,
        category,
        nivel,
        dificuldade,
        duracaoTotal,
      },
      include: { questoes: true },
    });
  },

  // Excluir uma prova
  async excluirProva(id) {
    return await prisma.prova.delete({ where: { id } });
  },

  // Buscar uma prova pelo ID
  async buscarProvaPorId(id) {
    return await prisma.prova.findUnique({
      where: { id },
      include: { questoes: true },
    });
  },

  // Buscar questões por ID (validação)
  async buscarQuestoesPorIds(ids) {
    return await prisma.questao.findMany({
      where: { id: { in: ids } },
    });
  },
};

export default ProvaModel;
