import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// GET - Lista todas as tags
export async function GET() {
  try {
    const tags = await prisma.tag.findMany({
      include: {
        posts: true,
      },
    });

    return NextResponse.json(tags);
  } catch (error) {
    console.error("Erro ao buscar tags:", error);
    return NextResponse.json({ error: "Erro ao buscar tags" }, { status: 500 });
  }
}

// POST - Cria uma nova tag
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const novaTag = await prisma.tag.create({
      data: {
        nome: body.nome,
      },
    });

    return NextResponse.json(novaTag, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar tag:", error);
    return NextResponse.json({ error: "Erro ao criar tag" }, { status: 500 });
  }
}
