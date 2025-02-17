import QuestaoService from "../services/questao.service";
import { NextApiRequest, NextApiResponse } from "next";

class QuestaoController {
  async getAll(req: NextApiRequest, res: NextApiResponse) {
    try {
      const questoes = await QuestaoService.getAllQuestoes();
      return res.status(200).json(questoes);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async getById(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { id } = req.query;
      const questao = await QuestaoService.getQuestaoById(id as string);
      return res.status(200).json(questao);
    } catch (error) {
      return res.status(404).json({ message: "Questão não encontrada" });
    }
  }

  async create(req: NextApiRequest, res: NextApiResponse) {
    try {
      const questao = await QuestaoService.createQuestao(req.body);
      return res.status(201).json(questao);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async update(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { id } = req.query;
      const questao = await QuestaoService.updateQuestao(id as string, req.body);
      return res.status(200).json(questao);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async delete(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { id } = req.body;
      await QuestaoService.deleteQuestao(id);
      return res.status(200).json({ message: "Questão excluída" });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export default new QuestaoController();
