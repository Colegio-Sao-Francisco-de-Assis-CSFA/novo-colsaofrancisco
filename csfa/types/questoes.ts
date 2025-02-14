import { Category, Disciplina, Nivel, Ano, Dificuldade, Type } from "./enums";

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
