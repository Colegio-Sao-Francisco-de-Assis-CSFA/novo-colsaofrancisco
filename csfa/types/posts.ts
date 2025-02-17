import { Usuario } from "@/types/usuarios";

/**
 * Interface para representar a categoria de um post
 */
export type CategoriaPost =
  | "NOTICIAS"
  | "EVENTOS"
  | "AVISOS"
  | "ARTIGOS"
  | "OUTROS";

/**
 * Interface para um post no sistema de blog
 */
export interface Post {
  id: string; // ID único do post
  titulo: string; // Título do post
  conteudo?: string; // Conteúdo do post (opcional)
  imagem?: string; // URL da imagem de capa (opcional)
  publicado: boolean; // Indica se o post está publicado
  categoria: CategoriaPost; // Categoria do post
  autorId: string; // ID do autor do post
  autor: Usuario; // Objeto do autor (relacionado)
  tags: Tag[]; // Lista de tags associadas ao post
  criadoEm: Date; // Data de criação
  atualizadoEm: Date; // Data de última atualização
}

/**
 * Interface para representar uma tag no sistema
 */
export interface Tag {
  id: string; // ID único da tag
  nome: string; // Nome da tag
  posts: Post[]; // Lista de posts associados à tag
}

/**
 * Interface para a relação entre posts e tags (muitos para muitos)
 */
export interface PostTag {
  postId: string; // ID do post
  tagId: string; // ID da tag
  post: Post; // Objeto do post relacionado
  tag: Tag; // Objeto da tag relacionada
}
