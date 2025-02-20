const express = require("express");
const provasController = require("../../controllers/provasController");

const router = express.Router();

// Rotas de Provas
router.get("/", provasController.listarProvas); // Listar provas
router.get("/:id", provasController.buscarProvaPorId); // Buscar uma prova por ID
router.post("/", provasController.criarProva); // Criar uma nova prova
router.put("/:id", provasController.atualizarProva); // Atualizar uma prova
router.delete("/:id", provasController.excluirProva); // Deletar uma prova

module.exports = router;
