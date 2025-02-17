import { NextResponse } from 'next/server';
import prisma from '@/lib/db/prisma';

// GET: Detalhar uma questão
export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  const questao = await prisma.questao.findUnique({
    where: { id },
    include: {
      autor: true, // Inclui informações do autor
      provas: {
        include: { prova: true }, // Inclui informações das provas associadas
      },
    },
  });

  if (!questao) {
    return NextResponse.json({ error: 'Questão não encontrada' }, { status: 404 });
  }

  return NextResponse.json(questao);
}

// PUT: Atualizar uma questão
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const body = await req.json();

  try {
    const questaoAtualizada = await prisma.questao.update({
      where: { id },
      data: {
        nome: body.nome,
        enunciado: body.enunciado,
        image: body.image || '',
        category: body.category,
        disciplina: body.disciplina,
        nivel: body.nivel,
        ano: body.ano,
        dificuldade: body.dificuldade,
        type: body.type,
        tempoEstimado: body.tempoEstimado || 0,
      },
    });

    return NextResponse.json(questaoAtualizada);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao atualizar a questão' }, { status: 400 });
  }
}

// DELETE: Deletar uma questão
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    await prisma.questao.delete({ where: { id } });
    return NextResponse.json({ message: 'Questão deletada com sucesso' });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao deletar a questão' }, { status: 400 });
  }
}
