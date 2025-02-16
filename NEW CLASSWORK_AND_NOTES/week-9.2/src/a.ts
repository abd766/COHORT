// function timer(fn:() => void){
//     setTimeout(fn,5000);
// }

// timer(()=>{
//     console.log("hello after 1s");
//     return false;
// })

//Interfaces

interface User {
    firstName: string,
    lastName:string,
    age:number,
    email?: string, // optional 
}; 

function isLegal(user: User): boolean{
    if(user.age<18)
        return false;
    return true;
}

console.log(isLegal({
    firstName: "abd",
    lastName: "001",
    age: 22
}))