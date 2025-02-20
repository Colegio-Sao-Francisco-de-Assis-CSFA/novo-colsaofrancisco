const express = require("express");
const provasRouter = require("./routes/provas");
const questoesRouter = require("./routes/questoes");
const usuariosRouter = require("./routes/usuarios");

const app = express();
const PORT = process.env.PORT || 8801;

// Middleware para parsear JSON
app.use(express.json());

// Rotas
app.use("/provas", provasRouter);
app.use("/questoes", questoesRouter);
app.use("/usuarios", usuariosRouter);


// Middleware de erro global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Erro interno do servidor." });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});