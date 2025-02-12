export interface Usuario {
  id: string;
  nome?: string;
  email: string;
  emailVerified?: Date;
  image?: string;
  setor: Setor;
  posts: Post[];
}

export enum Setor {
  COORDENACAO = "COORDENACAO",
  PROFESSOR = "PROFESSOR",
  DESIGNER = "DESIGNER",
  INFORMATICA = "INFORMATICA",
}

export interface Post {
  id: string;
  title: string;
  content?: string;
  autorId: string;
  autor: Usuario;
}

export interface VerificationToken {
  identifier: string;
  token: string;
  expires: Date;
}

// Quest Type Model
export interface Questao {
  id: string;
  nome: string;
  enunciado: string;
  image: string;
  category: Category;
  tag: Disciplina;
  type: Type;
  createdAt: Date;
  updatedAt: Date;

  provas?: ProvaQuestao[];
}
export enum Category {
  PUBLICA = "PUBLICA",
  SAS = "SAS",
  CSFA = "CSFA",
}
export enum Type {
  MULTIPLA = "MULTIPLA",
  DISSERTATIVA = "DISSERTATIVA",
  VERDADEIRO_OU_FALSO = "VERDADEIRO_OU_FALSO",
}
// Prova Type Model
export interface Prova {
  id: string;
  nome: string;
  disciplina: Disciplina
  nivel: Nivel
  dificuldade: Dificuldade
  status: Dificuldade
  createdAt: Date;
  updatedAt: Date;

  questoes?: ProvaQuestao[];
}
export enum Status {
  PUBLICADA = "PUBLICADA",
  RASCUNHO = "RASCUNHO",
}

export enum Disciplina {
  MATEMATICA = "MATEMATICA",
  PORTUGUES = "PORTUGUES",
  REDACAO = "REDACAO",
  INGLES = "INGLES",
  FISICA = "FISICA",
  QUIMICA = "QUIMICA",
  HISTORIA = "HISTORIA",
  GEOGRAFIA = "GEOGRAFIA",
  ARTES = "ARTES",
}

export enum Nivel {
  ENSINO_MEDIO = "ENSINO_MEDIO",
  ANOS_FINAIS = "ANOS_FINAIS",
  ANOS_INICIAIS = "ANOS_INICIAIS",
}
export enum Dificuldade {
  FACIL = "FACIL",
  MEDIO = "MEDIO",
  DIFICIL = "DIFICIL",
}
export interface ProvaQuestao {
  provaId: string;
  questaoId: string;
  prova: Prova;
  questao: Questao;
}
