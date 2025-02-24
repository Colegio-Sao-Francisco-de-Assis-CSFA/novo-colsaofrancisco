// questoesRoutes.js
const express = require("express");
const questoesController = require("../../controllers/questoesController");

const router = express.Router();

router.get("/", questoesController.listarQuestoes);
router.post("/", questoesController.criarQuestao);
router.get("/:id", questoesController.buscarQuestaoPorId);
router.put("/:id", questoesController.atualizarQuestao);
router.delete("/:id", questoesController.excluirQuestao);

module.exports = router;