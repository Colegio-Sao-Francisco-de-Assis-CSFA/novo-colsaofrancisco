"use server";

const fetchQuestoes = async (filters: any = {}) => {
  // Exemplo de como aplicar filtros ao buscar dados no servidor
  const query = new URLSearchParams(filters).toString(); // Converte filtros para query string
  const response = await fetch(`/api/questoes?${query}`);
  if (!response.ok) throw new Error("Erro ao buscar questões.");
  const data = await response.json();
  return data;
};

export default fetchQuestoes