import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function hanlder(red,res){
    const categorias = await prisma.producto.findMany({
        where:{
            categoriaId: 1,
        },
    });
    res.status(200).json(categorias);
}