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

    // Validação de nível e ano (RN1, RN2, RN3)
    const niveisValidos = {
      INICIAIS: ["PRIMEIRO", "SEGUNDO", "TERCEIRO", "QUARTO", "QUINTO"],
      FINAIS: ["SEXTO", "SETIMO", "OITAVO", "NONO"],
      MEDIO: ["PRIMEIRO", "SEGUNDO", "TERCEIRO"],
    };

    if (!niveisValidos[dados.nivel] || !niveisValidos[dados.nivel].includes(dados.ano)) {
      throw new Error(`O nível ${dados.nivel} só permite os anos: ${niveisValidos[dados.nivel].join(", ")}`);
    }

    // Validar tipo de questão
    const questoesFormatadas = dados.questoes.map((q) => {
      if (q.type === "VERDADEIRO_OU_FALSO") {
        if (!q.alternativas || q.alternativas.length < 3) {
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
        status: "RASCUNHO", // Padrão ao criar
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
    // Impedir a impressão se não estiver publicada (RN5)
    if (dados.status === "IMPRESSAO" || dados.status === "PUBLICADA") {
      const prova = await prisma.prova.findUnique({ where: { id } });
      if (!prova || prova.status !== "PUBLICADA") {
        throw new Error("A prova precisa estar publicada antes de ser impressa.");
      }
    }

    // Se alterar para publicada, ativar revisão antes (RN5)
    if (dados.status === "PUBLICADA") {
      const prova = await prisma.prova.findUnique({ where: { id } });
      if (!prova || prova.status !== "REVISAO") {
        throw new Error("A prova deve passar pela revisão antes de ser publicada.");
      }
    }

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