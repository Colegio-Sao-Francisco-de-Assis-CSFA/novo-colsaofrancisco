import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// GET - Obter detalhes de uma tag específica
export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const tag = await prisma.tag.findUnique({
      where: { id },
      include: {
        posts: true,
      },
    });

    if (!tag) {
      return NextResponse.json({ error: "Tag não encontrada" }, { status: 404 });
    }

    return NextResponse.json(tag);
  } catch (error) {
    console.error("Erro ao buscar tag:", error);
    return NextResponse.json({ error: "Erro ao buscar tag" }, { status: 500 });
  }
}

// PUT - Atualizar uma tag específica
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const body = await req.json();

    const tagAtualizada = await prisma.tag.update({
      where: { id },
      data: {
        nome: body.nome,
      },
    });

    return NextResponse.json(tagAtualizada);
  } catch (error) {
    console.error("Erro ao atualizar tag:", error);
    return NextResponse.json({ error: "Erro ao atualizar tag" }, { status: 500 });
  }
}

// DELETE - Deletar uma tag específica
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    await prisma.tag.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Tag deletada com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar tag:", error);
    return NextResponse.json({ error: "Erro ao deletar tag" }, { status: 500 });
  }
}
