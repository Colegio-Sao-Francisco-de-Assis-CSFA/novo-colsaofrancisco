export interface Usuario {
    id: string;
    nome?: string;
    email: string;
    emailVerified?: Date;
    image?: string;
    setor: Setor;
    posts: Post[];
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
  
  export enum Setor {
    COORDENACAO = "COORDENACAO",
    PROFESSOR = "PROFESSOR",
    DESIGNER = "DESIGNER",
    INFORMATICA = "INFORMATICA",
  }
  
  export interface Questao {
    id: string;
    nome: string;
    conteudo: string;
    tag?: string;
    type: string;
    createdAt: Date;
    updatedAt: Date;
    provas?: ProvaQuestao[];
  }
  
  export interface Prova {
    id: string;
    nome: string;
    tag?: string;
    type: string;
    createdAt: Date;
    updatedAt: Date;
    questoes?: ProvaQuestao[];
  }
  
  export interface ProvaQuestao {
    provaId: string;
    questaoId: string;
    prova: Prova;
    questao: Questao;
  }
  