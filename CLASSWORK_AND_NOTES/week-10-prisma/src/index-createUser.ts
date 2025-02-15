import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(email: string, password: string, firstName: string, lastName: string,username: string) {
    const res = await prisma.user.create({
        data: {
            email,
            password,
            firstName,
            lastName,
            username

        },
        select: {
            id: true,
            password: true

        }
    })
    console.log(res);
}
insertUser("abd@gmail.com", "123456", "Abdullah", "Masood","Abd766");