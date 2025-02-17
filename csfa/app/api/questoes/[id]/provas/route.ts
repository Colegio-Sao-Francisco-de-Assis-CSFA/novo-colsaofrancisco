import { NextResponse } from 'next/server';
import prisma from '@/lib/db/prisma';

// GET: Listar provas de uma questão
export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  const provas = await prisma.provaQuestao.findMany({
    where: { questaoId: id },
    include: { prova: true }, // Inclui detalhes das provas
  });

  return NextResponse.json(provas);
}
