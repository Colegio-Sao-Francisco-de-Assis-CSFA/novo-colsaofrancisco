import { NextResponse } from 'next/server';
import prisma from '@/lib/db/prisma';

// GET: Listar questões com filtros
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const searchQuery = searchParams.get('query') || ''; // Texto de busca
  const category = searchParams.get('category'); // Categoria
  const nivel = searchParams.get('nivel'); // Nível de ensino
  const dificuldade = searchParams.get('dificuldade'); // Dificuldade
  const page = parseInt(searchParams.get('page') || '1'); // Paginação (página atual)
  const limit = parseInt(searchParams.get('limit') || '10'); // Limite por página

  const skip = (page - 1) * limit; // Calcular offset

  // Construir os filtros dinamicamente
  const filters: any = {};
  if (category) filters.category = category;
  if (nivel) filters.nivel = nivel;
  if (dificuldade) filters.dificuldade = dificuldade;

  // Consultar questões no banco de dados
  const [questoes, total] = await prisma.$transaction([
    prisma.questao.findMany({
      where: {
        ...filters,
        OR: [
          { nome: { contains: searchQuery, mode: 'insensitive' } },
          { enunciado: { contains: searchQuery, mode: 'insensitive' } },
        ],
      },
      skip,
      take: limit,
      include: {
        autor: true, // Retornar informações do autor
      },
    }),
    prisma.questao.count({
      where: {
        ...filters,
        OR: [
          { nome: { contains: searchQuery, mode: 'insensitive' } },
          { enunciado: { contains: searchQuery, mode: 'insensitive' } },
        ],
      },
    }),
  ]);

  return NextResponse.json({ questoes, total, page, limit });
}

// POST: Criar nova questão
export async function POST(req: Request) {
  const body = await req.json();

  const novaQuestao = await prisma.questao.create({
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
      autorId: body.autorId || null,
    },
  });

  return NextResponse.json(novaQuestao, { status: 201 });
}
