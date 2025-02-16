import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient;

// async function insertUser(username:string, password:string,firstName:string,lastName:string){
//     const response = await prisma.user.create({
//         data:{
//             username,
//             password,
//             firstName,
//             lastName
//         },
//         select: {
//             id:true
//         },
//     })
//     console.log("User created",response);
// }

// insertUser("ax@gmail.com","123456","Abdullah","Masood");


interface updateParams {
    firstName: string,
    lastName:string
}
async function updateUser(username:string,{firstName,lastName}:updateParams){
    const reponse = await prisma.user.update({
        where:{username},
        data:{
            firstName,
            lastName
        }
    })
    console.log("user info updated");
}

updateUser("ax@gmail.com",{
    firstName: "american",
    lastName: "xile"
});