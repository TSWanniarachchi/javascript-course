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
*/
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
