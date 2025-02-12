import { NextResponse } from "next/server";
import { ProvaService } from "@/services/ProvaService";

export async function POST(request) {
  const data = await request.json();

  try {
    const prova = await ProvaService.criarProva(data);
    return NextResponse.json(prova, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao criar prova" }, { status: 500 });
  }
}

