import { NextResponse } from "next/server";
import prisma from "@/lib/db/prisma";

// Editar uma questão (PUT)
export async function PUT(req: Request, { params }: { params: { id: string } }) {
    
    try {

        const { id } = params;
        const body = await req.json();
        const { nome, conteudo, tag, type } = body;

        const questaoAtualizada = await prisma.questao.update({

            where: { id },
            data: { nome, conteudo, tag, type },

        });

        return NextResponse.json(questaoAtualizada);

    } catch (error) {

        return NextResponse.json({ error: "Erro ao editar questão" }, { status: 500 });

    }
}

// Excluir uma questão (DELETE)
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {

        const { id } = params;

        await prisma.questao.delete({ where: { id } });

        return NextResponse.json({ message: "Questão deletada com sucesso" });

    } catch (error) {

        return NextResponse.json({ error: "Erro ao deletar questão" }, { status: 500 });

    }
}
