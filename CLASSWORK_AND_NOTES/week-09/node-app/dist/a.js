"use strict";
function identity(arg) {
    return arg[0];
}
const output1 = identity(["Abdullah", "Masood"]);
const output2 = identity([234, 3, 5, 100]);
console.log(output1.toUpperCase());
