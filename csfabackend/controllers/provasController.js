const provasService = require("../services/provasService");

const provasController = {
  async listarProvas(req, res) {
    try {
      const filtros = req.query;
      const provas = await provasService.listarProvas(filtros);
      res.json(provas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async criarProva(req, res) {
    try {
      const dados = req.body;
      const novaProva = await provasService.criarProva(dados);
      res.status(201).json(novaProva);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async atualizarProva(req, res) {
    try {
      const { id } = req.params;
      const dados = req.body;
      const provaAtualizada = await provasService.atualizarProva(id, dados);
      res.json(provaAtualizada);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async buscarProvaPorId(req, res) {
    try {
      const { id } = req.params;
      const prova = await provasService.buscarProvaPorId(id);
      res.json(prova);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  async excluirProva(req, res) {
    try {
      const { id } = req.params;
      await provasService.excluirProva(id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },
};

module.exports = provasController;
