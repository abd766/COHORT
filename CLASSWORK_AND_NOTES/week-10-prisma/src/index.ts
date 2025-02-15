import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getTodosAndUserDetails(userId: number) {
   
    const reponse = await prisma.todo.findMany({
        where: {
            userId: userId
        }, select: {
            id: true,
            title: true,
            description: true,
            user: true
        }
    })
    console.log(reponse)
}
getTodosAndUserDetails(1);