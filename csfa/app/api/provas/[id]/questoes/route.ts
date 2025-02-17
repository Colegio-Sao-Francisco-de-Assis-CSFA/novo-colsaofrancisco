import { NextResponse } from 'next/server';
import prisma from '@/lib/db/prisma';

// GET: Listar questões de uma prova
export async function GET(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    const questoes = await prisma.provaQuestao.findMany({
        where: { provaId: id },
        include: { questao: true }, // Inclui detalhes das questões
    });

    return NextResponse.json(questoes);
}
