import { $Enums, Questao as PrismaQuestao } from "@prisma/client";
import { Prova, ProvaQuestao } from "@/types/prova";

class QuestaoModel implements PrismaQuestao {
  id: string;
  nome: string;
  enunciado: string;
  image: string;
  category: $Enums.Category;
  disciplina: $Enums.Disciplina;
  nivel: $Enums.Nivel;
  ano: $Enums.Ano;
  dificuldade: $Enums.Dificuldade;
  type: $Enums.Type;
  tempoEstimado: number;
  createdAt: Date;
  updatedAt: Date;
  autorId: string | null; // Add the missing property
  provas: ProvaQuestao[];

  constructor(data: PrismaQuestao & { provas?: ProvaQuestao[] }) {
    this.id = data.id;
    this.nome = data.nome;
    this.enunciado = data.enunciado;
    this.image = data.image;
    this.category = data.category;
    this.disciplina = data.disciplina;
    this.nivel = data.nivel;
    this.ano = data.ano;
    this.dificuldade = data.dificuldade;
    this.type = data.type;
    this.tempoEstimado = data.tempoEstimado;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.autorId = data.autorId || null; // Handle the case where autorId might be null
    this.provas = data.provas || []; // Initialize with an empty array if undefined
  }

  addProva(prova: Prova) {
    const provaQuestao: ProvaQuestao = {
      provaId: prova.id,
      questaoId: this.id,
      prova,
      questao: this as unknown as PrismaQuestao, // Cast for compatibility
    };

    this.provas.push(provaQuestao);
  }
}

export default QuestaoModel;
