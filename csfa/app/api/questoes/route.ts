import { questaoController }  from "@/controllers/questaoController";
import { NextRequest } from "next/server";

export async function GET() {
  return await questaoController.listarQuestoes();
}

export async function POST(req: NextRequest) {
  return await questaoController.criarQuestao(req);
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  return await questaoController.atualizarQuestao(req, id);
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  return await questaoController.deletarQuestao(id);
}
