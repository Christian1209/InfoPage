import { PrismaClient } from '@prisma/client'
import { categorias } from './Data/categorias'
import { productos } from './Data/productos'

const prisma = new PrismaClient()

const main = async():Promise<void> => {
    try{
        await prisma.categoria.createMany({
            data:categorias
        })
        await prisma.producto.createMany({
            data:productos
        })
    }
    catch{

    }
}

main();