const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const authService = require("../services/authService");

const SECRET_KEY = process.env.SECRET_KEY;
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || "chave-segura-para-id";

// Função para criptografar IDs
const encryptId = (id) => {
  const cipher = crypto.createCipher("aes-256-cbc", ENCRYPTION_KEY);
  let encrypted = cipher.update(id, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
};

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Acesso negado! Token não fornecido." });
  }

  const token = authHeader.replace("Bearer ", "");

  try {
    // Decodifica e verifica o token JWT
    const decoded = jwt.verify(token, SECRET_KEY);

    // Verifica se a sessão ainda é válida no banco de dados
    const sessionValid = await authService.verificarSessao(token);

    if (!sessionValid) {
      return res.status(401).json({ message: "Sessão expirada. Faça login novamente." });
    }

    // Criptografa o ID do usuário antes de definir na requisição
    req.userId = encryptId(decoded.userId);
    req.acesso = decoded.acesso; // Apenas define internamente, sem expor ao frontend

    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido ou expirado." });
  }
};

// Middleware para impedir usuários logados de acessar "/sign-in"
const redirectIfAuthenticated = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return next();

  const token = authHeader.replace("Bearer ", "");

  const sessionValid = await authService.verificarSessao(token);
  if (sessionValid) {
    return res.redirect("/dashboard"); // Redireciona usuários logados para a dashboard
  }

  next();
};

module.exports = { authMiddleware, redirectIfAuthenticated };
