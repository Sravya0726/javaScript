// comparision operator
let a = 10;
let b = "10";
let c = 20;

// equal (loose)
console.log(a == b ); // true -> value is same, type is ignored

// equal (strict)
console.log(a === b); // false -> value is same, but type is different

//not equal (loose)
console.log(a != b); // false -> values are equal,  so not equal is false

//not equal (strict)
console.log(a !== b); // true -> values are equal, but types are different

// greater than 
console.log(c>a); // true -> 20>10

//less than
console.log(a<c); // true -> 10<20

//greater than or equal to 
console.log(a>=10); //true

//less than or equal to 
console.log(a<=5); //false

