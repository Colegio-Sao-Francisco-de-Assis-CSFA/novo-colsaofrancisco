
import express from "express";
import ProvaController from "../controllers/ProvaController";
import { body } from "express-validator";

const router = express.Router();

// GET: Listar provas
router.get("/", ProvaController.listarProvas);

// POST: Criar prova
router.post(
  "/",
  [
    body("nome").notEmpty().withMessage("O campo 'nome' é obrigatório."),
    body("disciplina").notEmpty().withMessage("O campo 'disciplina' é obrigatório."),
    body("category").notEmpty().withMessage("O campo 'category' é obrigatório."),
    body("questoes")
      .isArray({ min: 1, max: 90 })
      .withMessage("A prova deve ter entre 1 e 90 questões."),
    body("duracaoTotal").isInt({ min: 1 }).withMessage("Duração total deve ser maior que 0."),
  ],
  ProvaController.criarProva
);

// PUT: Atualizar prova
router.put("/:id", ProvaController.atualizarProva);

// DELETE: Excluir prova
router.delete("/:id", ProvaController.excluirProva);

export default router;
