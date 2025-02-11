import { questaoService } from "@/services/questaoService";
import { NextResponse } from "next/server";

// 🔹 GET - Listar Questões
export async function GET() {
  try {
    const questoes = await questaoService.listarQuestoes();
    return NextResponse.json(questoes, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// 🔹 POST - Criar Questão
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const novaQuestao = await questaoService.criarQuestao(body);
    return NextResponse.json(novaQuestao, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
