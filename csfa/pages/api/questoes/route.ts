import { NextResponse } from "next/server";
import prisma from "@/lib/db/prisma"; // Certifique-se que Prisma está configurado corretamente

// 🟢 GET - Listar todas as questões
export async function GET() {
  try {
    const questoes = await prisma.questao.findMany();
    return NextResponse.json(questoes, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar questões" }, { status: 500 });
  }
}

// 🟢 POST - Criar nova questão
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const novaQuestao = await prisma.questao.create({ data: body });

    return NextResponse.json(novaQuestao, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao criar questão" }, { status: 500 });
  }
}
