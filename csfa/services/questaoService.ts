import { questaoModel } from "@/models/questaoModel";

export const questaoService = {
  async listarQuestoes() {
    return questaoModel.listarQuestoes(); // Delega a busca ao model
  },
  async criarQuestao(data: any) {
    // Validação ou transformação dos dados
    if (!data.nome || !data.conteudo) {
      throw new Error("Campos obrigatórios ausentes!");
    }

    // Envia os dados formatados para o model
    return questaoModel.criarQuestao(data);
  },
};
