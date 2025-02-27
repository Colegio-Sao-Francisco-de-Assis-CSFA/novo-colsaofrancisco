const provaModel = require("../models/provaModel");

const provaService = {
  async listarProvas(filtros) {
    return await provaModel.listarProvas(filtros);
  },

  async buscarProvaPorId(id) {
    const prova = await provaModel.buscarProvaPorId(id);
    if (!prova) {
      throw new Error("Prova não encontrada.");
    }
    return prova;
  },

  async criarProva(dados) {
    if (!dados.questoes || !Array.isArray(dados.questoes) || dados.questoes.length === 0) {
      throw new Error("A prova deve conter pelo menos uma questão.");
    }

    dados.questoes.forEach((q) => {
      if (q.type === "VERDADEIRO_OU_FALSO") {
        if (!q.alternativas || q.alternativas.length < 3 || q.alternativas.length > 5) {
          throw new Error("Questões de verdadeiro ou falso devem ter entre 3 e 5 alternativas.");
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
    });

    return await provaModel.criarProva(dados);
  },

  async atualizarProva(id, dados) {
    await this.buscarProvaPorId(id);
    return await provaModel.atualizarProva(id, dados);
  },

  async excluirProva(id) {
    await this.buscarProvaPorId(id);
    return await provaModel.excluirProva(id);
  },
};

module.exports = provaService;
