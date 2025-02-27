const provasModel = require("../models/provasModel");

const provaService = {
  // 🟢 Listar provas com filtros opcionais
  async listarProvas(filtros) {
    return await provasModel.listarProvas(filtros);
  },

  // 🔵 Criar uma nova prova com validações de questões
  async criarProva(dados) {
    if (!dados.questoes || !Array.isArray(dados.questoes) || dados.questoes.length === 0) {
      throw new Error("A prova deve conter pelo menos uma questão.");
    }

    // Validação de cada questão
    dados.questoes.forEach((questao) => {
      if (questao.type === "VERDADEIRO_OU_FALSO" || questao.type === "MULTIPLA") {
        if (!questao.alternativas || questao.alternativas.length < 3 || questao.alternativas.length > 5) {
          throw new Error(`Questões de tipo ${questao.type} devem ter entre 3 e 5 alternativas.`);
        }
      } else if (questao.type === "DISSERTATIVA") {
        if (!questao.tamanho || !["P", "M", "G", "GG"].includes(questao.tamanho)) {
          throw new Error("Questões dissertativas devem ter um tamanho válido (P, M, G ou GG).");
        }
      }
    });

    return await provasModel.criarProva(dados);
  },

  // 🟠 Buscar uma prova pelo ID
  async buscarProvaPorId(id) {
    const prova = await provasModel.buscarProvaPorId(id);
    if (!prova) {
      throw new Error("Prova não encontrada.");
    }
    return prova;
  },

  // 🟣 Atualizar uma prova existente
  async atualizarProva(id, dados) {
    const provaExistente = await provasModel.buscarProvaPorId(id);
    if (!provaExistente) {
      throw new Error("Prova não encontrada.");
    }

    // Se houver questões novas, garantir que sigam as regras de negócio
    if (dados.questoes) {
      dados.questoes.forEach((questao) => {
        if (questao.type === "VERDADEIRO_OU_FALSO" || questao.type === "MULTIPLA") {
          if (!questao.alternativas || questao.alternativas.length < 3 || questao.alternativas.length > 5) {
            throw new Error(`Questões de tipo ${questao.type} devem ter entre 3 e 5 alternativas.`);
          }
        } else if (questao.type === "DISSERTATIVA") {
          if (!questao.tamanho || !["P", "M", "G", "GG"].includes(questao.tamanho)) {
            throw new Error("Questões dissertativas devem ter um tamanho válido (P, M, G ou GG).");
          }
        }
      });
    }

    return await provasModel.atualizarProva(id, dados);
  },

  // 🔴 Excluir uma prova
  async excluirProva(id) {
    const provaExistente = await provasModel.buscarProvaPorId(id);
    if (!provaExistente) {
      throw new Error("Prova não encontrada.");
    }

    return await provasModel.excluirProva(id);
  },
};

module.exports = provaService;
