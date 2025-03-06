const usuariosService = require("../services/usuariosService");

const usuariosController = {
  async listarUsuarios(req, res) {
    try {
      const filtros = req.query;
      const usuarios = await usuariosService.listarUsuarios(filtros);
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async criarUsuario(req, res) {
    try {
      const dados = req.body;
      const novoUsuario = await usuariosService.criarUsuario(dados);
      res.status(201).json(novoUsuario);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async atualizarUsuario(req, res) {
    try {
      const { id } = req.params;
      const dados = req.body;
      const usuarioAtualizado = await usuariosService.atualizarUsuario(id, dados);
      res.json(usuarioAtualizado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async buscarUsuarioPorId(req, res) {
    try {
      const { id } = req.params;
      const usuario = await usuariosService.buscarUsuarioPorId(id);
      res.json(usuario);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  async buscarUsuarioPorEmail(req, res) {
    try {
      const { email } = req.query;
      console.log(`📩 Email recebido na requisição: ${email}`);

      if (!email) {
        return res.status(400).json({ error: "O email é obrigatório!" });
      }

      const usuario = await usuariosService.buscarUsuarioPorEmail(email);

      if (!usuario) {
        return res.status(404).json({ error: "Usuário não encontrado." });
      }

      res.json({
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        setor: usuario.setor ? usuario.setor.nome : null, // Retorna apenas o nome do setor
      });
    } catch (error) {
      console.error("❌ Erro ao buscar usuário:", error);
      res.status(500).json({ error: "Erro interno no servidor." });
    }
  },

  async excluirUsuario(req, res) {
    try {
      const { id } = req.params;
      await usuariosService.excluirUsuario(id);
      res.status(204).end();
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

};

module.exports = usuariosController;
