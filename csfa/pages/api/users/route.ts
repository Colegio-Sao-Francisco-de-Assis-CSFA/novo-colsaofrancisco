import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export async function POST(){
    
    let nome = "Cloves Neto";
    let email = "cloves.neto@colsaofrancisco.com.br";
    let setor = "Informática"

    const newUser = await prisma.usuario.create({
        data:{
            nome,
            email,
            setor
        }
    });
    return NextResponse.json(newUser);
}

