import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// GET - Obter todas as provas relacionadas a uma questão específica
export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const questao = await prisma.questao.findUnique({
      where: { id },
      include: {
        provas: {
          include: {
            prova: true,
          },
        },
      },
    });

    if (!questao) {
      return NextResponse.json({ error: "Questão não encontrada" }, { status: 404 });
    }

    const provas = questao.provas.map((rel) => rel.prova);

    return NextResponse.json(provas);
  } catch (error) {
    console.error("Erro ao buscar provas da questão:", error);
    return NextResponse.json(
      { error: "Erro ao buscar provas da questão" },
      { status: 500 }
    );
  }
}

// POST - Adicionar uma questão a uma prova com ordem específica
export async function POST(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params; // ID da questão
    const body = await req.json();
    const { provaId, ordem } = body; // ID da prova e ordem opcional

    // Verificar se a questão existe
    const questao = await prisma.questao.findUnique({ where: { id } });
    if (!questao) {
      return NextResponse.json({ error: "Questão não encontrada" }, { status: 404 });
    }

    // Verificar se a prova existe
    const prova = await prisma.prova.findUnique({ where: { id: provaId } });
    if (!prova) {
      return NextResponse.json({ error: "Prova não encontrada" }, { status: 404 });
    }

    // Calcular próxima ordem se não for fornecida
    const nextOrder =
      ordem ??
      (await prisma.provaQuestao.count({ where: { provaId } })) + 1;

    // Criar a relação com a ordem
    const novaRelacao = await prisma.provaQuestao.create({
      data: {
        provaId,
        questaoId: id,
        ordem: nextOrder, // Usar ordem calculada ou fornecida
      },
    });

    return NextResponse.json({ message: "Questão adicionada à prova com sucesso", novaRelacao }, { status: 201 });
  } catch (error) {
    console.error("Erro ao adicionar questão à prova:", error);
    return NextResponse.json({ error: "Erro ao adicionar questão à prova" }, { status: 500 });
  }
}

// DELETE - Remover a questão de uma prova específica
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params; // ID da questão
    const body = await req.json();

    const { provaId } = body; // ID da prova da qual a questão será removida

    // Verificar se a relação entre a questão e a prova existe
    const relacao = await prisma.provaQuestao.findUnique({
      where: {
        provaId_questaoId: {
          provaId,
          questaoId: id,
        },
      },
    });

    if (!relacao) {
      return NextResponse.json(
        { error: "A relação entre a questão e a prova não foi encontrada" },
        { status: 404 }
      );
    }

    // Remover a relação entre a questão e a prova
    await prisma.provaQuestao.delete({
      where: {
        provaId_questaoId: {
          provaId,
          questaoId: id,
        },
      },
    });

    return NextResponse.json({ message: "Questão removida da prova com sucesso" });
  } catch (error) {
    console.error("Erro ao remover questão da prova:", error);
    return NextResponse.json(
      { error: "Erro ao remover questão da prova" },
      { status: 500 }
    );
  }
}
