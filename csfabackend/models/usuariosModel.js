const prisma = require("../config/database");

const usuariosModel = {
  // Listar todos os usuários
  async listarUsuarios(filtros) {
    const { nome, setor, email } = filtros || {};
    return await prisma.usuario.findMany({
      where: {
        ...(nome && { nome: { contains: nome } }),
        ...(setor && { setor: { contains: setor } }),
        ...(email && { email: { contains: email } }),
      },
    });
  },

  // Criar um novo usuário
  async criarUsuario(dados) {
    return await prisma.usuario.create({
      data: {
        nome: dados.nome,
        email: dados.email,
        setor: dados.setor,
        image: dados.image || null, // Imagem é opcional
      },
    });
  },

  // Buscar usuário por email
  async buscarUsuarioPorEmail(email) {
    return await prisma.usuario.findUnique({
      where: { email },
    });
  },

  // Buscar usuário por ID
  async buscarUsuarioPorId(id) {
    return await prisma.usuario.findUnique({
      where: { id },
    });
  },

  // Atualizar usuário
  async atualizarUsuario(id, dados) {
    return await prisma.usuario.update({
      where: { id },
      data: {
        nome: dados.nome,
        email: dados.email,
        setor: dados.setor,
        image: dados.image || null, // Imagem é opcional
      },
    });
  },

  // Excluir usuário
  async excluirUsuario(id) {
    return await prisma.usuario.delete({
      where: { id },
    });
  },
};

module.exports = usuariosModel;
