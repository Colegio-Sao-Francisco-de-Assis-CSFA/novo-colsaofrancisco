import { Questao } from "./questoes";
import { Type, Disciplina, Category, Nivel, Dificuldade, Status } from "./enums";

export interface Prova {
  id: string;
  nome: string;
  type: Type;
  disciplina: Disciplina;
  category: Category;
  nivel: Nivel;
  dificuldade: Dificuldade;
  status: Status;
  questoes: ProvaQuestao[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ProvaQuestao {
  provaId: string;
  questaoId: string;
  prova: Prova;
  questao: Questao;
}
