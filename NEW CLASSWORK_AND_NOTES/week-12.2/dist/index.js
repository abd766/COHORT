"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
console.log(sumOfAge({
    name: "Abd",
    age: 22
}, {
    name: "masood",
    age: 50
}));
