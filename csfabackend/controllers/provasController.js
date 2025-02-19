import ProvaService from "../services/ProvaService";

const ProvaController = {
  async listarProvas(req, res) {
    try {
      const provas = await ProvaService.listarProvas(req.query);
      res.status(200).json(provas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async criarProva(req, res) {
    try {
      const novaProva = await ProvaService.criarProva(req.body);
      res.status(201).json(novaProva);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async atualizarProva(req, res) {
    try {
      const { id } = req.params;
      const provaAtualizada = await ProvaService.atualizarProva(id, req.body);
      res.status(200).json(provaAtualizada);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async excluirProva(req, res) {
    try {
      const { id } = req.params;
      await ProvaService.excluirProva(id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

export default ProvaController;
