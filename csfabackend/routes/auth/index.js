const express = require("express");
const prisma = require("../../config/database");

const router = express.Router();

router.post("/", async (req, res) => {  // Importante: "/" e não "/auth"
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email é obrigatório." });
  }

  try {
    const usuario = await prisma.usuario.findUnique({ where: { email } });

    if (!usuario) {
      return res.status(404).json({ error: "Email não encontrado." });
    }

    res.status(200).json({ message: "Email validado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao validar email." });
  }
});

module.exports = router; // Certifique-se de que está exportando apenas `router`
