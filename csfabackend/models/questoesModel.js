// questoesModel.js
const prisma = require("../config/database");

const questoesModel = {
  // Listar todas as questões com filtros opcionais
  async listarQuestoes(filtros) {
    const { nome, category, disciplina, nivel, ano, dificuldade, type } = filtros || {};
    return await prisma.questao.findMany({
      where: {
        ...(nome && { nome: { contains: nome } }),
        ...(category && { category: category }),
        ...(disciplina && { disciplina: disciplina }),
        ...(nivel && { nivel: nivel }),
        ...(ano && { ano: ano }),
        ...(dificuldade && { dificuldade: dificuldade }),
        ...(type && { type: type }),
      },
      include: { provas: true },
    });
  },

  // Criar uma nova questão
  async criarQuestao(dados) {
    console.log("📩 Dados recebidos para criação de questão:", dados);

    // Validação de alternativas conforme o tipo da questão
    if (dados.type === "MULTIPLA") {
      if (!dados.alternativas || dados.alternativas.length < 3 || dados.alternativas.length > 5) {
        throw new Error("Questões de múltipla escolha devem ter entre 3 e 5 alternativas.");
      }
    }

    if (dados.type === "VERDADEIRO_OU_FALSO") {
      if (!dados.alternativas || dados.alternativas.length < 3 || dados.alternativas.length > 5) {
        throw new Error("Questões de verdadeiro ou falso devem ter no mínimo 3 afirmações.");
      }
    }

    if (dados.type === "DISSERTATIVA") {
      if (!["P", "M", "G", "GG"].includes(dados.tamanhoResposta)) {
        throw new Error("O tamanho da resposta deve ser P, M, G ou GG.");
      }
    }

    return await prisma.questao.create({
      data: {
        ...dados,
        disposicaoQuestao: {
          tamanho: dados.disposicaoQuestao?.tamanho || "M",
          alinhamento: dados.disposicaoQuestao?.alinhamento || "CENTRO",
          temImagem: dados.disposicaoQuestao?.temImagem || false,
        }
      }
    });
  },

  // Buscar questão por ID
  async buscarQuestaoPorId(id) {
    return await prisma.questao.findUnique({ where: { id }, include: { provas: true } });
  },

  // Atualizar questão
  async atualizarQuestao(id, dados) {
    return await prisma.questao.update({ where: { id }, data: dados });
  },

  // Excluir questão
  async excluirQuestao(id) {
    return await prisma.questao.delete({ where: { id } });
  },
};

module.exports = questoesModel;
