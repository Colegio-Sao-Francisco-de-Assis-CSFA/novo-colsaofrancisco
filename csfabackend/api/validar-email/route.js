const express = require("express");
const prisma = require("./config/database"); // Configuração do Prisma

const router = express.Router();

// Rota para validar o email
router.post("/api/validate-email", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email é obrigatório." });
  }

  try {
    const usuario = await prisma.usuario.findUnique({
      where: { email },
    });

    if (!usuario) {
      return res.status(404).json({ error: "Email não encontrado." });
    }

    res.status(200).json({ message: "Email validado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao validar email." });
  }
});

module.exports = router;
