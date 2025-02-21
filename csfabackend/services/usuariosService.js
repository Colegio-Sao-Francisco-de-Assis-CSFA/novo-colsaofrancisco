const usuariosModel = require("../models/usuariosModel");

const usuariosService = {
  async listarUsuarios() {
    return await usuariosModel.listarUsuarios();
  },

  async criarUsuario(dados) {
    // Validações de negócio
    if (!dados.nome || !dados.email || !dados.setor) {
      throw new Error("Os campos 'nome', 'email' e 'setor' são obrigatórios.");
    }

    // Email único
    const usuarioExistente = await usuariosModel.buscarUsuarioPorEmail(dados.email);
    if (usuarioExistente) {
      throw new Error("Este email já está em uso.");
    }

    // Máximo de 1 setor por usuário
    if (Array.isArray(dados.setor)) {
      throw new Error("Um usuário pode ter no máximo 1 setor.");
    }

    return await usuariosModel.criarUsuario(dados);
  },

  async buscarUsuarioPorId(id) {
    const usuario = await usuariosModel.buscarUsuarioPorId(id);
    if (!usuario) {
      throw new Error("Usuário não encontrado.");
    }
    return usuario;
  },

  async buscarUsuarioPorEmail(email) {
    if (!email) {
      throw new Error("Email é obrigatório");
    }
    return await usuariosModel.buscarUsuarioPorEmail(email);
  },

  async atualizarUsuario(id, dados) {
    // Validações de negócio
    if (dados.setor && Array.isArray(dados.setor)) {
      throw new Error("Um usuário pode ter no máximo 1 setor.");
    }

    // Email único (caso seja alterado)
    const usuarioExistente = await usuariosModel.buscarUsuarioPorEmail(dados.email);
    if (usuarioExistente && usuarioExistente.id !== id) {
      throw new Error("Este email já está em uso por outro usuário.");
    }

    return await usuariosModel.atualizarUsuario(id, dados);
  },

  async excluirUsuario(id) {
    const usuario = await usuariosModel.buscarUsuarioPorId(id);
    if (!usuario) {
      throw new Error("Usuário não encontrado.");
    }

    return await usuariosModel.excluirUsuario(id);
  },
};

module.exports = usuariosService;
