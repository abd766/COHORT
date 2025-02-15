import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUser(userId: number) {
    const reponse = await prisma.todo.findMany({
        where: {
            userId: userId
        }
    })
    console.log(reponse) 
}
getUser(1);