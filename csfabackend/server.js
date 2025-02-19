const express = require("express");

const usuariosRouter = require("./routes/provas");
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


// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
