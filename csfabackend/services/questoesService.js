// questoesService.js
const questoesModel = require("../models/questoesModel");

const questoesService = {
  async listarQuestoes(filtros) {
    return await questoesModel.listarQuestoes(filtros);
  },

  async criarQuestao(dados) {
    return await questoesModel.criarQuestao(dados);
  },

  async buscarQuestaoPorId(id) {
    return await questoesModel.buscarQuestaoPorId(id);
  },

  async atualizarQuestao(id, dados) {
    return await questoesModel.atualizarQuestao(id, dados);
  },

  async excluirQuestao(id) {
    return await questoesModel.excluirQuestao(id);
  },
};

module.exports = questoesService;