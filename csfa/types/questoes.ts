import { Category, Disciplina, Nivel, Ano, Dificuldade, Type } from "./enums";
  import { ProvaQuestao } from "./prova";

export interface Questao {
  id: string;
  nome: string;
  enunciado: string;
  image: string;
  category: Category;
  disciplina: Disciplina;
  nivel: Nivel;
  ano: Ano;
  dificuldade: Dificuldade;
  type: Type;
  createdAt: Date;
  updatedAt: Date;

  provas: ProvaQuestao[];
}
