import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function hanlder(red,res){
    const categorias = await prisma.categoria.findMany({
        include: {
            productos: true
        }
    });
    res.status(200).json(categorias);
}