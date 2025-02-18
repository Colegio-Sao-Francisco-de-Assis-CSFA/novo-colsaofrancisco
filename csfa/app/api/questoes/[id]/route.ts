import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// GET - Obter uma questão específica
export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const questao = await prisma.questao.findUnique({
      where: { id },
      include: {
        autor: {
          select: { id: true, nome: true, email: true },
        },
        provas: true,
      },
    });

    if (!questao) {
      return NextResponse.json({ error: "Questão não encontrada" }, { status: 404 });
    }

    return NextResponse.json(questao);
  } catch (error) {
    console.error("Erro ao buscar questão:", error);
    return NextResponse.json({ error: "Erro ao buscar questão" }, { status: 500 });
  }
}

// PUT - Atualizar uma questão específica
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const body = await req.json();

    const questaoAtualizada = await prisma.questao.update({
      where: { id },
      data: {
        nome: body.nome,
        enunciado: body.enunciado,
        disciplina: body.disciplina,
        nivel: body.nivel,
        ano: body.ano,
        dificuldade: body.dificuldade,
        type: body.type,
      },
    });

    return NextResponse.json(questaoAtualizada);
  } catch (error) {
    console.error("Erro ao atualizar questão:", error);
    return NextResponse.json({ error: "Erro ao atualizar questão" }, { status: 500 });
  }
}

// DELETE - Deletar uma questão específica
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    await prisma.questao.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Questão deletada com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar questão:", error);
    return NextResponse.json({ error: "Erro ao deletar questão" }, { status: 500 });
  }
}
