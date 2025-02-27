const authModel = require("../models/authModel");
const jwt = require("jsonwebtoken");

const authService = {
  async validarEmail(email) {
    // RN - Apenas e-mails institucionais são aceitos
    if (!email || !email.endsWith("@colsaofrancisco.com.br")) {
      throw new Error("E-mail inválido. Use seu e-mail institucional.");
    }

    // Verifica se o usuário está cadastrado
    const user = await authModel.buscarUsuarioPorEmail(email);
    if (!user) {
      throw new Error("E-mail não cadastrado, informe ao administrador.");
    }

    return { valid: true };
  },

  async criarSessao(userId) {
    const expiresAt = new Date(Date.now() + 12 * 60 * 60 * 1000); // RN - Sessão válida por 12H
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "12h" });

    // Salvar token no banco
    await authModel.salvarSessao(userId, token, expiresAt);

    return { token, expiresAt };
  },

  async verificarSessao(token) {
    if (!token) return false;

    const sessao = await authModel.buscarSessaoPorToken(token);
    if (!sessao || new Date(sessao.expiresAt) < new Date()) {
      return false;
    }

    return true;
  },

  async logout(token) {
    await authModel.removerSessao(token);
  },
};

module.exports = authService;
