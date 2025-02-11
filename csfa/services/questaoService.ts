import { questaoModel } from "@/models/questaoModel";

export const questaoService = {
  
  async listarQuestoes() {
    return await questaoModel.listar();
  },

  async buscarQuestao(id: string) {
    if (!id) throw new Error("ID inválido!");
    return await questaoModel.buscarPorId(id);
  },

  async criarQuestao(data: any) {
    if (!data.nome || !data.conteudo) throw new Error("Campos obrigatórios!");
    return await questaoModel.criar(data);
  },

  async atualizarQuestao(id: string, data: any) {
    return await questaoModel.atualizar(id, data);
  },

  async deletarQuestao(id: string) {
    return await questaoModel.deletar(id);
  },

};
