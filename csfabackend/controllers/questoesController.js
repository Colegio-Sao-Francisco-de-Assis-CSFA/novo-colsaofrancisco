// questoesController.js
const questoesService = require("../services/questoesService");

const questoesController = {
  async listarQuestoes(req, res) {
    try {
      const filtros = req.query;
      const questoes = await questoesService.listarQuestoes(filtros);
      res.json(questoes);
    } catch (error) {
      console.error("❌ Erro ao listar questões:", error);
      res.status(500).json({ error: error.message });
    }
  },

  async criarQuestao(req, res) {
    try {
      const dados = req.body;
      console.log("📩 Recebendo nova questão:", dados);
      const novaQuestao = await questoesService.criarQuestao(dados);
      res.status(201).json(novaQuestao);
    } catch (error) {
      console.error("❌ Erro ao criar questão:", error);
      res.status(400).json({ error: error.message });
    }
  },

  async buscarQuestaoPorId(req, res) {
    try {
      const { id } = req.params;
      console.log("🔍 Buscando questão com ID:", id);
      const questao = await questoesService.buscarQuestaoPorId(id);
      if (!questao) return res.status(404).json({ error: "Questão não encontrada." });
      res.json(questao);
    } catch (error) {
      console.error("❌ Erro ao buscar questão por ID:", error);
      res.status(500).json({ error: error.message });
    }
  },

  async atualizarQuestao(req, res) {
    try {
      const { id } = req.params;
      const dados = req.body;
      console.log("🛠 Atualizando questão ID:", id, "com dados:", dados);
      const questaoAtualizada = await questoesService.atualizarQuestao(id, dados);
      res.json(questaoAtualizada);
    } catch (error) {
      console.error("❌ Erro ao atualizar questão:", error);
      res.status(400).json({ error: error.message });
    }
  },

  async excluirQuestao(req, res) {
    try {
      const { id } = req.params;
      console.log("🗑 Excluindo questão ID:", id);
      await questoesService.excluirQuestao(id);
      res.status(204).send();
    } catch (error) {
      console.error("❌ Erro ao excluir questão:", error);
      res.status(404).json({ error: error.message });
    }
  },
};

module.exports = questoesController;