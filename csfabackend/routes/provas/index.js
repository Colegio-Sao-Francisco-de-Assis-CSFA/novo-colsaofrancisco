const express = require("express");
const provasController = require("../../controllers/provasController");


const router = express.Router();

// Rotas de Provas
router.post("/", provasController.criarProva); // Apenas usuários do setor "X" podem criar provas
router.get("/", provasController.listarProvas);  // Apenas usuários do setor "X" podem listar provas
router.get("/:id", provasController.buscarProvaPorId); // Apenas usuários do setor "X" Buscar uma prova por ID
router.delete("/:id", provasController.excluirProva); // Apenas usuários do setor "X" Deletar uma prova,
router.put("/:id", provasController.atualizarProva);  // Apenas usuários do setor "X" Atualizar uma prova

module.exports = router;
