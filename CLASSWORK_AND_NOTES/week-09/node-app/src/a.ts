// function isLegal(age: number): boolean {
//     if (age > 18){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isLegal(19))

// function runAfter1S(fn : () => void ) {
//     setTimeout(fn, 1000);
// }
// function test(){
//     console.log("hi after 1 second");
// }
// runAfter1S(test)

// interface User {
//     firstName: string,
//     lastName: string,
//     age: number,
//     email?: string // this basicallly means that email is optional argument if the user gives it then it is okay otherwise it is also fine
// }
// function isLegal( user: User){
//     if (user.age > 18){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isLegal({
//     firstName: "Abdullah",
//     lastName: "Masood",
//     age: 20
// }))

// One big and major difference between an interface and a type is that interfaces can be implemented and can be extended to each other (extends)in classes while type cannot but type can implement union and intersection properties

// type User = {
//     firstName: string,
//     lastName : string,
//     age: number
// }

// type GreetArg = number | string
// function greet(id: GreetArg){
//     console.log(id);
// }
// greet("HI");
// greet(1);

// type Employee = {
//     name: string,
//     startDate : Date
// }
// // it can be intersected with an interface also
// interface Manager {
//     name: string,
//     department: string
// }
// // type Manager = {
// //     name: string,
// //     department: string
// // }

// type Techlead = Employee & Manager;
// here type let you have all the propertie of the name, startDate, department as it is put under intersection

// type NumberArray = number[];
// then we can pass (value: NumberArray)
// function maxInArray(value: number[]){
//     let max: number = 0;
//     for (let i: number =0; i < value.length; i++){
//         if (max < value[i]){
//             max = value[i]
//         }
//     }
//     return max;
// }
// console.log(maxInArray([1,2,3,4,5]))

// interface User {
//     firstName: string,
//     lastName: string,
//     age: number
// }


// function isLegal(value : User[]){
//     const legalUsers = value.filter((user) => user.age > 18)
//     return legalUsers;
// }
// console.log(isLegal([{
//     firstName: "Abd",
//     lastName: "Mas",
//     age: 19
// },{
//     firstName: "Abdullah",
//     lastName: "Masood",
//     age: 16
// },{
//     firstName: "Abdul",
//     lastName: "Masood",
//     age: 25
// },{
//     firstName: "Abd",
//     lastName: "Masood",
//     age: 14
// },]))

// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }
// function doSomething (keyPressed : Direction){
//     if(keyPressed == Direction.Up)
//     {
         
//     }
// }
// doSomething(Direction.Up)
// doSomething(Direction.Down)
// doSomething(Direction.Left)
// doSomething(Direction.Right);
// console.log(Direction.Up)
// console.log(Direction.Down)
// console.log(Direction.Left)
// console.log(Direction.Right)

// giving particular values
// enum Direction {
//     Up = "up",
//     Down = "down",
//     Left = "left",
//     Right = "right"
// }
// function doSomething (keyPressed : Direction){
//     if(keyPressed == Direction.Up)
//     {
         
//     }
// }
// doSomething(Direction.Up)
// doSomething(Direction.Down)
// doSomething(Direction.Left)
// doSomething(Direction.Right);
// console.log(Direction.Up)
// console.log(Direction.Down)
// console.log(Direction.Left)
// console.log(Direction.Right)

// giving the enum value starting form 1
// enum Direction {
//     Up = 1,
//     Down,
//     Left,
//     Right
// }
// function doSomething (keyPressed : Direction){
//     if(keyPressed == Direction.Up)
//     {
         
//     }
// }
// doSomething(Direction.Up)
// doSomething(Direction.Down)
// doSomething(Direction.Left)
// doSomething(Direction.Right);
// console.log(Direction.Up)
// console.log(Direction.Down)
// console.log(Direction.Left)
// console.log(Direction.Right)

// Use case of enum in express

// const app = express();

// enum ResponseCodes {
//     Success = 200,
//     NotFound = 411,
//     Error =  500
// }

// app.get("/", (req, res) => {
//     // suppose everything goes alright therefore success
//     res.status(ResponseCodes.Success).json({})
// })


// app.get("/", (req, res) => {
//     // suppose error happened
//     res.status(ResponseCodes.Error).json({})
// })

// Generics

function identity<T>(arg :T[]){
    return arg[0];
}
const output1 = identity<string>(["Abdullah","Masood"]);
const output2 = identity<number>([234, 3, 5, 100]);
console.log(output1.toUpperCase());