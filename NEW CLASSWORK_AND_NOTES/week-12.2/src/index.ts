// interface User {
//     id: string,
//     email:string,
//     password:string,
//     name:string,
//     age:number
// }




// Pick api
// type UpdateProps = Pick<User, 'name' | 'age' | 'email'>;

// Partial api
// type UpdatePropsPartial = Partial<UpdateProps>;

// Readonly
// type UserNew = {
//     name:string;
//     age: number;
// }

// const user: Readonly<UserNew> ={
//     name:'John',
//     age:20
// }
// //we cant do this down here
// user.age = 1;


// makign an object

// type User ={
//     id:string,
//     name:string
// }

// type Users ={
//     [key:string] :User;
// }

// const users:Users ={
//     "abc":{
//         id:"1",
//         name:"a"
//     },
//     "xyz":{
//         id:"2",
//         name:"b"
//     }
// }

// Records

// type Users = Record<string,number>

// const users:Users ={
//     "abc": 1,
//     "xyz": 2,
// }

//Maps
// type User ={
//     name:string,
//     age:number,
//     email:string
// }
// const users = new Map<string,User>();
// users.set("abc",{name:"Abc",age:30,email:"abc@gmail.com"})
// users.set("xyz",{name:"xyz",age:20,email:"xyz@gmail.com"})

// Exclude
// type EventType = "click" | "scroll" | "mouseover"
// type ExcludeEvent = Exclude<EventType, "click">;
// const handleEvent = (event:ExcludeEvent) =>{
//     console.log("Handling Event",event);
// } 
// handleEvent("mouseover")

// Type inference in zod

// import { z } from 'zod';
// import express from "express";

// const app = express();

// Define the schema for profile update
// const userProfileSchema = z.object({
//   name: z.string().min(1, { message: "Name cannot be empty" }),
//   email: z.string().email({ message: "Invalid email format" }),
//   age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
// });

// // here we have converted the schema from zod to a type schema into a type in ts
// type UpdateBodySchema = z.infer<typeof userProfileSchema>;

// app.put("/user", (req, res) => {
//   const { success } = userProfileSchema.safeParse(req.body);
//   const updateBody: UpdateBodySchema = req.body; // how to assign a type to updateBody?

//   if (!success) {
//     res.status(411).json({});
//     return
//   }
//   // update database here
//   res.json({
//     message: "User updated"
//   })
// });

// app.listen(3000);

// function sumOfAge(user1:User, user2: User):number{
//     return user1.age+user2.age;
// }

// console.log(sumOfAge({
//     name:"Abd",
//     age:22
// },{
//     name:"masood",
//     age: 50
// }))