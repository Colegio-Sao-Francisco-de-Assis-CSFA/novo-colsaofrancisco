import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// GET - Lista todas as questões
export async function GET() {
  try {
    const questoes = await prisma.questao.findMany({
      include: {
        autor: {
          select: { id: true, nome: true, email: true },
        },
        provas: true,
      },
    });

    return NextResponse.json(questoes);
  } catch (error) {
    console.error("Erro ao buscar questões:", error);
    return NextResponse.json({ error: "Erro ao buscar questões" }, { status: 500 });
  }
}

// POST - Cria uma nova questão
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const novaQuestao = await prisma.questao.create({
      data: {
        nome: body.nome,
        enunciado: body.enunciado,
        disciplina: body.disciplina,
        nivel: body.nivel,
        ano: body.ano,
        dificuldade: body.dificuldade,
        type: body.type,
        autorId: body.autorId || null, // Caso o autorId não seja enviado
      },
    });

    return NextResponse.json(novaQuestao, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar questão:", error);
    return NextResponse.json({ error: "Erro ao criar questão" }, { status: 500 });
  }
}
