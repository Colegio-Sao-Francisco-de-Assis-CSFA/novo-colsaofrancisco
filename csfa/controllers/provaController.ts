import { NextResponse } from "next/server";
import { ProvaService } from "@/services/ProvaService";
import { z } from "zod";

// Schema para validação da entrada
const criarProvaSchema = z.object({
  nome: z.string(),
  type: z.enum(["MULTIPLA", "DISSERTATIVA", "VERDADEIRO_OU_FALSO"]),
  tag: z.enum(["MATEMATICA", "PORTUGUES", "REDACAO", "INGLES", "FISICA", "QUIMICA", "HISTORIA", "GEOGRAFIA", "ARTES"]),
  category: z.enum(["PUBLICA", "SAS", "CSFA"]),
  nivel: z.enum(["ENSINO_MEDIO", "ANOS_FINAIS", "ANOS_INICIAIS"]),
  dificuldade: z.enum(["FACIL", "MEDIO", "DIFICIL"]),
  questoesIds: z.array(z.string()).optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = criarProvaSchema.parse(body); // Valida os dados

    const prova = await ProvaService.criarProva(data);
    return NextResponse.json(prova, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Dados inválidos", issues: error.errors }, { status: 400 });
    }

    console.error("Erro ao criar prova:", error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
