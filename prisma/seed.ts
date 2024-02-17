import { PrismaClient } from '@prisma/client'
import { vacantes } from './Data/vacantes'

const prisma = new PrismaClient()

const main = async():Promise<void> => {
    try{
        await prisma.vacantesNormandia.createMany({
            data:vacantes
        })
    }
    catch{

    }
}

main();