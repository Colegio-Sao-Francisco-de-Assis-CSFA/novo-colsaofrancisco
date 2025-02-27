const provaService = require("../services/provasService");

const provaController = {
  async listarProvas(req, res) {
    try {
      const provas = await provaService.listarProvas(req.query);
      return res.status(200).json(provas);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async buscarProvaPorId(req, res) {
    try {
      const { id } = req.params;
      const prova = await provaService.buscarProvaPorId(id);
      return res.status(200).json(prova);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  },

  async criarProva(req, res) {
    try {
      const prova = await provaService.criarProva(req.body);
      return res.status(201).json(prova);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async atualizarProva(req, res) {
    try {
      const { id } = req.params;
      const prova = await provaService.atualizarProva(id, req.body);
      return res.status(200).json(prova);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async excluirProva(req, res) {
    try {
      const { id } = req.params;
      await provaService.excluirProva(id);
      return res.status(200).json({ message: "Prova excluída com sucesso." });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
};

module.exports = provaController;
