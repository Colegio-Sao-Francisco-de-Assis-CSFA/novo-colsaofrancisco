//QuestaoService

import prisma from "@/lib/db/prisma";
import QuestaoModel from "@/models/questaoModel";

class QuestaoService {
  async getAllQuestoes(){
    const questoes = await prisma.questao.findMany({
      include: {
        provas: true,
      },
    });
    return questoes.map((questao) => new QuestaoModel(questao));
  }
}

export  default new QuestaoService();