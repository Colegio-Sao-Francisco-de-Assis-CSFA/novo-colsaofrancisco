const authService = require("../services/authService");

const authController = {
  async signIn(req, res) {
    try {
      const { email } = req.body;

      // Valida o e-mail e verifica se está cadastrado
      await authService.validarEmail(email);

      // Criar sessão e gerar token
      const { token, expiresAt } = await authService.criarSessao(email);

      return res.status(200).json({ token, expiresAt });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async checkSession(req, res) {
    try {
      const token = req.headers.authorization?.split(" ")[1]; // Bearer Token
      const isValid = await authService.verificarSessao(token);

      return res.status(200).json({ sessionActive: isValid });
    } catch (error) {
      return res.status(500).json({ message: "Erro ao verificar sessão." });
    }
  },

  async logout(req, res) {
    try {
      const token = req.headers.authorization?.split(" ")[1];

      if (!token) return res.status(400).json({ message: "Token não informado" });

      await authService.logout(token);
      return res.status(200).json({ message: "Logout realizado com sucesso." });
    } catch (error) {
      return res.status(500).json({ message: "Erro ao encerrar sessão." });
    }
  },
};

module.exports = authController;
