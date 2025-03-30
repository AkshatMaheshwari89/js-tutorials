let score = "33gb"
let age = null
let temp = undefined
let boolean = true

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

console.log(valueInNumber);

let valueInNumberage = Number(age)
console.log("age",valueInNumberage);

let valueInNumbertemp = Number(temp)
console.log("temp",valueInNumbertemp);

let valueInNumberboolean = Number(boolean)
console.log("boolean",valueInNumberboolean);



// "33" => 33
// "33gb" => NaN
// true => 1; false => 0

let isLoggedIn = 0
let valueInBoolean = Boolean(isLoggedIn);
console.log(valueInBoolean);

// 1 => true; 0 => false
// "" => false
// "Akshat" => true

let someNumber = 35
let valueInString = String(someNumber)
console.log(valueInString);
console.log(typeof valueInString);


