require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8801;

const provasRouter = require("./routes/provas");
const authRouter = require("./routes/auth");
const usuariosRouter = require("./routes/usuarios");
const questoesRouter = require("./routes/questoes");


// Middleware para permitir JSON e CORS
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Rotas


app.use("/auth", authRouter);
app.use("/provas", provasRouter);
app.use("/questoes", questoesRouter);
app.use("/auth", authRouter)
app.use("/usuarios", usuariosRouter);


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
