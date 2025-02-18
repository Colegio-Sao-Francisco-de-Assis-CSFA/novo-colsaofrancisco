import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// GET - Obter detalhes de uma prova específica
export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const prova = await prisma.prova.findUnique({
      where: { id },
      include: {
        questoes: {
          include: {
            questao: true,
          },
        },
      },
    });

    if (!prova) {
      return NextResponse.json({ error: "Prova não encontrada" }, { status: 404 });
    }

    return NextResponse.json(prova);
  } catch (error) {
    console.error("Erro ao buscar prova:", error);
    return NextResponse.json({ error: "Erro ao buscar prova" }, { status: 500 });
  }
}

// PUT - Atualizar uma prova específica
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const body = await req.json();

    const provaAtualizada = await prisma.prova.update({
      where: { id },
      data: {
        nome: body.nome,
        type: body.type,
        disciplina: body.disciplina,
        category: body.category,
        nivel: body.nivel,
        dificuldade: body.dificuldade,
        duracaoTotal: body.duracaoTotal || 0,
        questoes: {
          deleteMany: {}, // Remove as questões existentes
          create: body.questoes.map((questaoId: string) => ({
            questao: {
              connect: { id: questaoId },
            },
          })),
        },
      },
    });

    return NextResponse.json(provaAtualizada);
  } catch (error) {
    console.error("Erro ao atualizar prova:", error);
    return NextResponse.json({ error: "Erro ao atualizar prova" }, { status: 500 });
  }
}

// DELETE - Deletar uma prova específica
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    await prisma.prova.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Prova deletada com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar prova:", error);
    return NextResponse.json({ error: "Erro ao deletar prova" }, { status: 500 });
  }
}
