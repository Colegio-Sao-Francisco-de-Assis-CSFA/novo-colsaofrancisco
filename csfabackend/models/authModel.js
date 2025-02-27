const prisma = require("../config/database");

const authModel = {
  // Busca o usuário pelo e-mail
  async buscarUsuarioPorEmail(email) {
    return await prisma.usuario.findUnique({ where: { email } });
  },

  // Cria ou atualiza o token de sessão
  async salvarSessao(userId, token, expiresAt) {
    return await prisma.sessao.upsert({
      where: { userId },
      update: { token, expiresAt },
      create: { userId, token, expiresAt },
    });
  },

  // Busca uma sessão ativa
  async buscarSessaoPorToken(token) {
    return await prisma.sessao.findUnique({ where: { token } });
  },

  // Exclui um token de sessão (logout)
  async removerSessao(token) {
    return await prisma.sessao.delete({ where: { token } });
  },
};

module.exports = authModel;
