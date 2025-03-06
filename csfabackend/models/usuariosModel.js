const prisma = require("../config/database");

const usuariosModel = {
  // Listar todos os usuários
  async listarUsuarios(filtros) {
    const { nome, setor } = filtros || {};

    return await prisma.usuario.findMany({
      where: {
        ...(nome && { nome: { contains: nome, mode: "insensitive" } }),
        ...(setor && { setor: { nome: { contains: setor, mode: "insensitive" } } }),
      },
      include: {
        setor: true, // Garante que o setor seja retornado
      },
    });
  },

  async buscarUsuarioPorEmail(email) {
    return await prisma.usuario.findUnique({
      where: { email },
      include: { setor: true }, // Retorna o setor do usuário
    });
  },

  async atualizarVerificacaoEmail(email) {
    return await prisma.usuario.update({
      where: { email },
      data: { emailVerified: new Date() },
    });
  },

  // Criar um novo usuário
  async criarUsuario(dados) {
    return await prisma.usuario.create({
      data: {
        nome: dados.nome,
        email: dados.email,
        googleId: dados.googleId,
        setor: dados.setor ? { connect: { id: dados.setor } } : undefined, // Relacionamento com setor
      },
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
