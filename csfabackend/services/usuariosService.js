const usuariosModel = require("../models/usuariosModel");

const usuariosService = {
  async listarUsuarios(filtros) {
    return await usuariosModel.listarUsuarios(filtros);
  },

  async criarUsuario(dados) {
    if (!dados.nome || !dados.email) {
      throw new Error("Os campos 'nome' e 'email' são obrigatórios.");
    }

    // Verifica se o usuário já existe
    const usuarioExistente = await usuariosModel.buscarUsuarioPorEmail(dados.email);
    if (usuarioExistente) {
      throw new Error("Este email já está em uso.");
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

    const usuario = await usuariosModel.buscarUsuarioPorEmail(email);
    if (!usuario) {
      throw new Error("Usuário não encontrado.");
    }

    return usuario;
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
