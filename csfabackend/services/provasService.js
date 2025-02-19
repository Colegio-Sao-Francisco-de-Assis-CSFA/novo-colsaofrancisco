import ProvaModel from "../models/ProvaModel";

const ProvaService = {
  // Listar provas com filtros
  async listarProvas(filtros) {
    return await ProvaModel.listarProvas(filtros);
  },

  // Criar uma nova prova com validações
  async criarProva(dados) {
    const { questoes } = dados;

    // Validação de IDs únicos
    const questoesUnicas = new Set(questoes.map((q) => q.id));
    if (questoesUnicas.size !== questoes.length) {
      throw new Error("Existem IDs de questões duplicados na prova.");
    }

    // Validação de questões existentes
    const questoesValidas = await ProvaModel.buscarQuestoesPorIds(questoes.map((q) => q.id));
    if (questoesValidas.length !== questoes.length) {
      throw new Error("Algumas questões fornecidas não existem ou estão inativas.");
    }

    return await ProvaModel.criarProva(dados);
  },

  // Atualizar prova com validações
  async atualizarProva(id, dados) {
    const { questoes } = dados;

    if (questoes) {
      // Validação de IDs únicos
      const questoesUnicas = new Set(questoes.map((q) => q.id));
      if (questoesUnicas.size !== questoes.length) {
        throw new Error("Existem IDs de questões duplicados na prova.");
      }

      // Validação de questões existentes
      const questoesValidas = await ProvaModel.buscarQuestoesPorIds(questoes.map((q) => q.id));
      if (questoesValidas.length !== questoes.length) {
        throw new Error("Algumas questões fornecidas não existem ou estão inativas.");
      }
    }

    return await ProvaModel.atualizarProva(id, dados);
  },

  // Excluir uma prova
  async excluirProva(id) {
    const prova = await ProvaModel.buscarProvaPorId(id);
    if (!prova) {
      throw new Error("Prova não encontrada.");
    }
    return await ProvaModel.excluirProva(id);
  },
};

export default ProvaService;
