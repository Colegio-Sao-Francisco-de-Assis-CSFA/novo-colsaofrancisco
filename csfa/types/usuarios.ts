import { Setor } from "./enums";
import { Post } from "./questoes";

export interface Usuario {
  id: string;
  nome?: string | null;
  email: string;
  emailVerified?: Date | null;
  image?: string | null;
  setor: Setor;
  posts: Post[];
}
