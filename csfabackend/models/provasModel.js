// provasModel.js
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
      include: { questoes: true },
    });
  },

  // Criar uma nova prova com validações
  async criarProva(dados) {
    // Validação de questões
    if (!dados.questoes || !Array.isArray(dados.questoes) || dados.questoes.length === 0) {
      throw new Error("A prova deve conter pelo menos uma questão.");
    }

    // Validar tipo de questão
    const questoesFormatadas = dados.questoes.map((q) => {
      if (q.type === "VERDADEIRO_OU_FALSO") {
        if (!q.alternativas || q.alternativas.length < 3 || q.alternativas.length > 5) {
          throw new Error("Questões de verdadeiro ou falso devem ter pelo menos 3 alternativas.");
        }
      } else if (q.type === "MULTIPLA") {
        if (!q.alternativas || q.alternativas.length < 3 || q.alternativas.length > 5) {
          throw new Error("Questões de múltipla escolha devem ter entre 3 e 5 alternativas.");
        }
      } else if (q.type === "DISSERTATIVA") {
        if (!q.tamanho || !["P", "M", "G", "GG"].includes(q.tamanho)) {
          throw new Error("Questões dissertativas devem ter um tamanho válido (P, M, G ou GG).");
        }
      }

      return {
        questaoId: q.id,
        ordem: q.ordem,
      };
    });

    return await prisma.prova.create({
      data: {
        ...dados,
        questoes: { create: questoesFormatadas },
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

  // Atualizar uma prova com validações
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

  // Excluir uma prova
  async excluirProva(id) {
    return await prisma.prova.delete({ where: { id } });
  },
};

module.exports = provasModel;
