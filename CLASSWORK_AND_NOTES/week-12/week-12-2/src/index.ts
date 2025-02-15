// interface User {
//     name: String,
//     age: number
// }
// function sumAge(User1: User, User2: User){
//     return User1.age + User2.age;
// }
// console.log(sumAge({name:"Abdullah",age:20}, {name:"Masood",age:56}))


// Pick API it let you pick entries from both type and interfaces

// interface User {
//     id: string
//     name: String,
//     age: number
//     email: string,
//     password: string
// }
// type UpdateProps = Pick<User, "name" | "age" | "email">

// Partial API lets you make entries optional from the pick type

// interface User {
//     id: string
//     name: String,
//     age: number
//     email: string,
//     password: string
// }
// type UpdateProps = Pick<User, "name" | "age" | "email">
// type UpdatePropsOptional = Partial<UpdateProps>

// Readonly to restrict changes to the element
// making the type readonly internally
// type User = {
//     readonly name: string,
//     readonly age: number
// }
// making the type readonly from outside
// type User = {
//     readonly name: string,
//     readonly age: number
// }
// const user: Readonly<User> ={
//     name: 'Abd',
//     age: 21
// }

// Defining objects

// type User = {
//     id: string,
//     username: string
// }
// type Users = {
//     [key: string]: User
// }

// const users = {
//     "a1": {
//         id: "a1",
//         username: "Abd"
//     },
//     "a2": {
//         id: "a2",
//         username: "Mas"
//     },
// }
// above can also be done as :-

// const users: Users = {
//     "a1": {
//         id: "a1",
//         username: "Abd"
//     },
//     "a2": {
//         id: "a2",
//         username: "Mas"
//     },
// }

// Record let define type more in a cleaner way and it is typescript specific concept

// type User = Record<string, {name: string, age: number}>

// const users: User = {
//     "a1": {
//         age: 20,
//         name: "Abd"
//     },
//     "a2": {
//         age: 56,
//         name: "Mas"
//     },
// }

// Map 

// const users = new Map()

// users.set("a1", {name: "Abdullah", age: 20, email: "abd766@gmail.com"});
// users.set("a2", {name: "Masood", age: 56, email: "masoodkmj@gmail.com"});

// const user = users.get("a1");
// Map also uses function like delete, set

// Exclude let you exclude values from the type, Exclude mainly works on string or literals not like particularly on objects

// type EventType = "click" | "scroll" | "mouseover";
// type ExcludeEvent = Exclude<EventType, "scroll">;
// const handleEvent = (event: ExcludeEvent) => {
//     console.log("Handling " + event);
// }

// handleEvent("click");

// TYPE INFERENCE IN ZOD 

// import { zod } from "zod"
// import express from "express"
// const app = express();
// const userProfileSchema = zod.object({
//     email: zod.string().email().optional(),
//     name: zod.string(),
//     age: zod.number(),
// })

// export type FinalUserProfile = zod.infer<typeof userProfileSchema>
// app.put("/", (req, res) => {
//     const updateBody: FinalUserProfile = req.body; // Here type is assigned to the updateBody as of userProfileSchema via the zod.infer to userProfileSchema and export it to FinalUserProfile
})
