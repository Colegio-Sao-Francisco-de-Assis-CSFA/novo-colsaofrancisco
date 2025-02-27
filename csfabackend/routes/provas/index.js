const express = require("express");
const provasController = require("../../controllers/provasController");
const authMiddleware = require("../../middlewares/authMiddleware");
const setorMiddleware = require("../../middlewares/setorMiddleware");

const router = express.Router();

// Rotas de Provas
router.post("/", authMiddleware.authDecode, setorMiddleware(["PROFESSOR", "ADMIN", "COORDENACAO"]), provasController.criarProva); // Apenas usuários do setor "X" podem criar provas
router.get("/", authMiddleware.authDecode, setorMiddleware(["PROFESSOR", "ADMIN", "COORDENACAO"]), provasController.listarProvas);  // Apenas usuários do setor "X" podem listar provas
router.get("/:id", authMiddleware.authDecode, setorMiddleware(["PROFESSOR", "ADMIN", "COORDENACAO"]), provasController.buscarProvaPorId); // Apenas usuários do setor "X" Buscar uma prova por ID
router.delete("/:id", authMiddleware.authDecode, setorMiddleware(["PROFESSOR", "ADMIN", "COORDENACAO"]), provasController.excluirProva); // Apenas usuários do setor "X" Deletar uma prova,
router.put("/:id", authMiddleware.authDecode, setorMiddleware(["PROFESSOR", "ADMIN", "COORDENACAO"]), provasController.atualizarProva);  // Apenas usuários do setor "X" Atualizar uma prova

module.exports = router;
