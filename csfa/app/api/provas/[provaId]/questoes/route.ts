import { NextResponse } from 'next/server';
import prisma from '@/lib/db/prisma';

// POST: Associar questões a uma prova
export async function POST(
  req: Request,
  { params }: { params: { provaId: string } }
) {
  const { provaId } = params;
  const body = await req.json();

  // Lista de IDs de questões a serem associadas
  const { questaoIds } = body;

  try {
    // Verifica se a prova existe
    const prova = await prisma.prova.findUnique({ where: { id: provaId } });
    if (!prova) {
      return NextResponse.json({ error: 'Prova não encontrada' }, { status: 404 });
    }

    // Cria as associações em lote
    const associacoes = questaoIds.map((questaoId: string) => ({
      provaId,
      questaoId,
    }));

    await prisma.provaQuestao.createMany({ data: associacoes });

    return NextResponse.json({ message: 'Questões associadas à prova com sucesso' });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao associar questões' }, { status: 400 });
  }
}
export async function DELETE(
    req: Request,
    { params }: { params: { provaId: string; questaoId: string } }
  ) {
    const { provaId, questaoId } = params;

    try {
      await prisma.provaQuestao.delete({
        where: {
          provaId_questaoId: { provaId, questaoId }, // Chave composta
        },
      });

      return NextResponse.json({ message: 'Questão desassociada da prova com sucesso' });
    } catch (error) {
      return NextResponse.json({ error: 'Erro ao desassociar questão' }, { status: 400 });
    }
  }
