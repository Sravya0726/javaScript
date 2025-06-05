//4. logical operators
//used in conditions (if,while,etc.)to combine or invert boolean values.

let x = true;
let y = false;

//logical AND
console.log(x && y); // false -> both must be true

//logical OR
console.log(x || y); // true -> at least one must be true

//logical NOT 
console.log(!x); //false -> inverts true to false

// Bitwise operators
//work at binary (bit) level. Numbers are converted to 32-bit binary first

let a = 5;
let b = 3;

console.log(a&b); //1-> 0101 & 0011 = 0001
console.log(a | b); //7 