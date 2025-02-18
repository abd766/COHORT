import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getTodosAndUserDetails(Id:number){
    const response = await prisma.users.findFirst({
        where:{
            Id
        },
        select:{
            Id:true,
            username:true,
            firstName:true,
            lastName:true,
            todos:true
        }
    });
    console.log(response)
} 
getTodosAndUserDetails(1);

// async function insertTodos() {
//     const response = await prisma.todos.create({
//         data: {
//             title:"Todo 2",
//             description:"This is description of todo 2",
//             userId: 1
//         }
//     })
//     console.log(response);
// }
// insertTodos();

// insertUser("abd","1233","abd","masood");

// async function insertUser(username: string, password: string, firstName: string, lastName: string) {
//     const response = await prisma.users.create({
//         data: {
//             username,
//             password,
//             firstName,
//             lastName
//         }
//     })
//     console.log(response);
// }

// insertUser("abd","1233","abd","masood");