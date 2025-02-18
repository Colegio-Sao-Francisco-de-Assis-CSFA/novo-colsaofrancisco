import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// GET - Lista todas as provas
export async function GET() {
  try {
    const provas = await prisma.prova.findMany({
      include: {
        questoes: {
          include: {
            questao: true,
          },
        },
      },
    });

    return NextResponse.json(provas);
  } catch (error) {
    console.error("Erro ao buscar provas:", error);
    return NextResponse.json({ error: "Erro ao buscar provas" }, { status: 500 });
  }
}

// POST - Cria uma nova prova
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const novaProva = await prisma.prova.create({
      data: {
        nome: body.nome,
        type: body.type,
        disciplina: body.disciplina,
        category: body.category,
        nivel: body.nivel,
        dificuldade: body.dificuldade,
        duracaoTotal: body.duracaoTotal || 0,
        questoes: {
          create: body.questoes.map((questaoId: string) => ({
            questao: {
              connect: { id: questaoId },
            },
          })),
        },
      },
    });

    return NextResponse.json(novaProva, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar prova:", error);
    return NextResponse.json({ error: "Erro ao criar prova" }, { status: 500 });
  }
}

