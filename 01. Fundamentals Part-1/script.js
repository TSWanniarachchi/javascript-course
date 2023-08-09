/*
////////////////////////////////////
// Linking a JavaScript File
let js = "amazing";
console.log(40 + 5 + 9 - (78 * 8) / 1);


////////////////////////////////////
// Values and Variables
console.log("Sachin");
console.log(23);

let firstName = "Sachin";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let tharindu_sachin = "TS";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);


////////////////////////////////////
// Data Types
let firstName = "Sachin"; // String
console.log(typeof firstName);

let age = 27; // Number
console.log(typeof age);

let javascriptIsFun = true; // Boolean
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);

javascriptIsFun = "Yes!"; // Dyanamic Typing
console.log(typeof javascriptIsFun);

let year; // Undefined
console.log(year);
console.log(typeof year);

year = 1996;
console.log(year);
console.log(typeof year);

console.log(typeof null); // Both the value and type of the value are null


////////////////////////////////////
// let, const and var
let age = 30;
age = 31;

const birthYear = 1996;
// birthYear = 1991;
// const job;

var job = "Programmer";
job = "Student";

lastName = "Wanniarachchi"; // Never just write a variable like this without really declaring it.
console.log(lastName);


////////////////////////////////////
// Basic Operators

// Math operators
const now = 2023;
const ageSachin = now - 1990;
const ageKavindu = now - 2005;

console.log(ageSachin, ageKavindu);
console.log(ageSachin * 2, ageSachin / 2);
console.log(2 ** 3); // 2 ** 3 means 2 to the power 3 = 2 * 2 * 2

const firstName = "Sachin";
const lastName = "Wanniarachchi";
console.log(firstName + " " + lastName); // Concatenation of strings

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x -= 20; // x = x -20 = 80
x /= 2; // x = x / 2 = 40
x++; // x = x + 1
x--; // x = x - 1
x--; // x = x - 1
console.log(x);

// Comparison operators
console.log(ageSachin > ageKavindu); // <, >, <=, >=
console.log(ageKavindu >= 18);

const isFullAge = ageKavindu >= 18;
console.log(isFullAge);

console.log(now - 1990 > now - 2005);


////////////////////////////////////
// Operator Precedence
const now = 2023;
const ageSachin = now - 1990;
const ageKavindu = now - 2005;

console.log(now - 1990 > now - 2005);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageSachin + ageKavindu) / 2;
console.log(ageSachin, ageKavindu, averageAge);
*/

////////////////////////////////////
// Coding Challenge #1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

1. Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.
2. Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.
3. Log the value of BMIMark and BMIJohn to the console.
4. BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

/*
// 1.
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// 2.
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

// 3.
console.log(BMIMark, BMIJohn);

// 4.
const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);


////////////////////////////////////
// Strings and Template Literals
const firstName = "Sachin";
const job = "Programmer";
const birthYear = 1996;
const year = 2023;

const sachin =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "."; // concat strings
console.log(sachin);

// `` backticks

const sachinNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}.`; // template strings
console.log(sachinNew);

console.log(`just a regular string...`);

// new line
console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String with
multiple
lines`);

console.log(`String with \nmultiple \nlines`);


////////////////////////////////////
// Taking Decisions: if / else Statements
const age = 15;
// const isOldEnough = age >= 18;

if (age >= 18) {
  console.log("Sachin can start driving license 🚗");
} else {
  const yearLeft = 18 - age;
  console.log(`Sachin is too young. Wait another ${yearLeft} years. 😒`);
}

const birthYear = 1996;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

////////////////////////////////////
// Coding Challenge #2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either: "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".
2. Modify the outputs above to use template literals to include the BMI values in the outputs.
Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

Note: Don't round the BMI values. Leave them as they are.

Write your code below. Good luck! 🙂 
*/

/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

// 1.
if (BMIMark > BMIJohn) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's!");
}

// 2.
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}


////////////////////////////////////
// Type Conversion and Coercion

// Type Conversion
const inputYear = "1991";

console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Sachin")); // ❌ NaN = Not a Number (bug) ✔ Invalid Number
console.log(typeof NaN); // number
console.log(String(24), 42);

// Type Coercion
console.log("i am " + 27 + " years old");
console.log(`i am ${27} years old`);
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1; // 11
n = n - 1; // 10
console.log(n);

console.log(2 + 3 + 4 + "5"); // 95
console.log("10" - "4" - "3" - 2 + "5"); // 15


////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, "", undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

// 5 Truthy values: 1, Non-empty strings, empty object {} and array [], Numbers other than zero
console.log(Boolean(1));
console.log(Boolean("Sachin"));
console.log(Boolean({}));
console.log(Boolean([]));

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/

////////////////////////////////////
// Equality Operators: == vs. ===
const age = "18";

// strict equality operator ===
if (age === 18) console.log("You just became an adult :D (strict)"); // triple equal does not perform type coercion

// loose equality operator ==
if (age == 18) console.log("You just became an adult :D (loose)"); // double equal does type coercion

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 7 or 9 or 23");
}

if (favourite !== 23) console.log("Why not 23?");

////////////////////////////////////
