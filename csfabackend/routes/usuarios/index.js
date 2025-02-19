const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const router = express.Router();

// Criar um novo usuário
router.post("/", async (req, res) => {
  const { nome, email, setor, image } = req.body;

  try {
    const novoUsuario = await prisma.usuario.create({
      data: {
        nome,
        email,
        setor,
        image,
      },
    });
    res.status(201).json(novoUsuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar usuário." });
  }
});

// Listar todos os usuários
router.get("/", async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany();
    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao listar usuários." });
  }
});

// Obter um usuário pelo ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await prisma.usuario.findUnique({
      where: { id },
    });
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).json({ error: "Usuário não encontrado." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar usuário." });
  }
});

// Atualizar informações de um usuário
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, email, setor, image } = req.body;

  try {
    const usuarioAtualizado = await prisma.usuario.update({
      where: { id },
      data: {
        nome,
        email,
        setor,
        image,
      },
    });
    res.json(usuarioAtualizado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao atualizar usuário." });
  }
});

// Deletar um usuário
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.usuario.delete({
      where: { id },
    });
    res.status(204).send(); // Sucesso sem conteúdo
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao deletar usuário." });
  }
});

module.exports = router;
