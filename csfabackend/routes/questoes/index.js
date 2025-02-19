const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const router = express.Router();

// Criar uma questão
router.post("/", async (req, res) => {
  const {
    nome,
    enunciado,
    image, // Agora opcional
    category,
    disciplina,
    nivel,
    ano,
    dificuldade,
    type,
    tempoEstimado, // Agora opcional
    autorId,
  } = req.body;

  try {
    const novaQuestao = await prisma.questao.create({
      data: {
        nome,
        enunciado,
        image: image || null, // Caso não enviado, será null
        category,
        disciplina,
        nivel,
        ano,
        dificuldade,
        type,
        tempoEstimado: tempoEstimado || 0, // Caso não enviado, será 0
        autorId,
      },
    });
    res.status(201).json(novaQuestao);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar a questão." });
  }
});

// Obter todas as questões
router.get("/", async (req, res) => {
  try {
    const questoes = await prisma.questao.findMany({
      include: {
        autor: true,
      },
    });
    res.json(questoes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar questões." });
  }
});

// Obter uma única questão pelo ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const questao = await prisma.questao.findUnique({
      where: { id },
      include: {
        autor: true,
      },
    });
    if (questao) {
      res.json(questao);
    } else {
      res.status(404).json({ error: "Questão não encontrada." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar a questão." });
  }
});

// Atualizar uma questão
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const {
    nome,
    enunciado,
    image, // Agora opcional
    category,
    disciplina,
    nivel,
    ano,
    dificuldade,
    type,
    tempoEstimado, // Agora opcional
    autorId,
  } = req.body;

  try {
    const questaoAtualizada = await prisma.questao.update({
      where: { id },
      data: {
        nome,
        enunciado,
        image: image || null, // Caso não enviado, será null
        category,
        disciplina,
        nivel,
        ano,
        dificuldade,
        type,
        tempoEstimado: tempoEstimado || 0, // Caso não enviado, será 0
        autorId,
      },
    });
    res.json(questaoAtualizada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao atualizar a questão." });
  }
});

// Excluir uma questão
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.questao.delete({
      where: { id },
    });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao excluir a questão." });
  }
});

module.exports = router;
