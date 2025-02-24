const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY;

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Acesso negado! Token não fornecido." });
  }

  try {
    const decoded = jwt.verify(token.replace("Bearer ", ""), SECRET_KEY);
    req.acesso = decoded.acesso; // Apenas setor do usuário
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido ou expirado." });
  }
};

module.exports = authMiddleware;
