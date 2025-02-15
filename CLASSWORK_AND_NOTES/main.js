// var num=0;
// for(var i=0;i<=1000;i++){
//     console.log(num);
//     num=num+1;
// }

// // Complex objects
// const Users=[{
//     firstName:"Abd",
//     gender:"male",
// },{
//     firstName:"Masood",
//     gender:"male",
// },{
//     firstName:"Sam",
//     gender:"female",
// }]

// for(var i=0;i<Users.length;i++){
//     if(Users[i]["gender"]=="male"){
//         console.log(Users[i]["firstName"]);
//     }
// }

//Functions and callbacks

// function sum(num1,num2,fnToCall) {
//     let result=num1+num2;
//     fnToCall(result);
// }
// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
//  }
// function displayResultPassive(data) {
//     console.log("Sum's Result is : " + data);
// }
// const ans=sum(4,6,displayResultPassive);

//Example 2

// function calculateArithmetic(a,b,fnToCall) {
//     const ans=fnToCall(a,b);
//     return ans;
// }
// function add(num1,num2) {
//     return num1+num2;
// }
// function minus(num1,num2) {
//     return num1-num2;
// }
// console.log(calculateArithmetic(8,9,minus));

//Example 3

// function greet() {
//     console.log("hellow world");
// }
// setInterval(greet,1*1000);
// setTimeout(greet,3*1000);

//Terminal Clock

// function updateClock() {
//     const now = new Date();
//     var hours=now.getHours();
//     var minutes=now.getMinutes();
//     var seconds=now.getSeconds();
//     console.log(hours+":"+minutes+":"+seconds);
// }
// setInterval(updateClock,1000);

//Async function example
//SET TIMEOUT ALSO A ASYNC FUNCTION

// const fs=require("fs");
// fs.readFile("a.txt","utf-8",function(err,data){
//     console.log(data);
// });

// console.log("hey there");

//PROMISES

//ASYNC AWAIT

// function abdAsyncFucntion(){
//     return new Promise(function(resolve){
//         resolve("hi there")
//     });
// }

// async function main(){
//     const value = await abdAsyncFucntion();
//     console.log(value);
// }

// main()

// JSON.parse
// JSON.stringify

// var a = new Promise(function(resolve){
//     resolve("hi there");
//     console.log(a);
// })

//MAP, FILTER, ARROW FUNCTIONS
// const arr1 = [1, 2, 3, 4, 5];
// map functions

// function transform(i){
//     return i * 2;
// }
// const ans = arr1.map(function (i){
//     return i*2;
// })
// // const ans = arr.map(transform);
// console.log(ans);


// filter function

// function filterLogic (n){
//     if (n % 2 == 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// const ans = arr1.filter(filterLogic);
// const ans = arr1.filter(function (n){
//     if (n % 2 == 0){
//         return true;
//     }else{
//          return false;
//     }
// });
// console.log(ans);

// arrow function
// const ans = arr1.filter( (n) => {
//     if (n % 2 == 0){
//         return true;
//     }else{
//          return false;
//     }
// });
// console.log(ans);



// function map(arr, transform) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(transform(arr[i]));
//     }
//     return result;
// }
// const numbers = [1, 2, 3, 4, 5];
// const ans = map(numbers, (x) => x * 2);
// console.log(ans);

// ZOD EMAIL, PASSWORD, COUNTRY VALIDATION

// const express = require("express");
// const zod = require("zod");

// const schema = zod.object({
//     email: zod.string().email(),
//     password: zod.string().min(8),
//     country: zod.literal("IN").or(zod.literal("US"))
// });

// const app = express();
// app.use(express.json());

// function inputValidator(req, res, next) {
//     const { email, password, country } = req.body;
//     const input = {
//         email, password, country
//     };
//     const response = schema.safeParse(input);
//     if (!response.success) {
//         return res.status(400).json({
//             msg: response.error.issues.map(issues => issues.message)
//         });
//     } else {
//         next();
//     }
// }

// app.use(inputValidator);

// app.get("/", function (req, res) {
//     res.json({
//         msg: "Input validated"
//     })
// });

// app.post("/", function (req, res) {

//     res.status(200).json({
//         msg: "Successfull"
//     })

// });

// app.use(function (err, req, res, next) {
//     res.json({
//         msg: "some internal server error occured"
//     })
// });

// app.listen(3000);

//AUTHENTICATION USING JWT

const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());
const ALL_USERS = [
  {
    username: "abd766@gmail.com",
    password: "123",
    name: "Abdullah Masood",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

// function userExists(username, password) {
//     for (let i = 0; i<ALL_USERS.length; i++){
//         if (ALL_USERS[i].username == username && ALL_USERS[i].password == password){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }

// 2nd Way
function userExists(username, password){
    const userExist = ALL_USERS.find(user => user.username == username && user.password == password);
    if(userExist != undefined){
        return true;
    }else{
        return false;
    }
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // without using filter function down below
    // const leftUsers = [];
    // for (let i = 0, j = 0; i<ALL_USERS.length; i++){
    //     if (ALL_USERS[i].username == username){
    //         continue;
    //     }else{
    //         leftUsers[j] = ALL_USERS[i];
    //         j++;
    //     }
    // }
    res.status(200).json({
        users: ALL_USERS.filter(function(value){
            if (value.username == username){
                return false;
            }else{
                return true;
            }
        })
    })
    // return a list of users other than this username
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000)