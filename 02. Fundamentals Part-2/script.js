"use strict";

/*
////////////////////////////////////
// Activating Strict Mode

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive a 🚗");

// const interface = "Audio";
// const private = 534;


///////////////////////////////////////
// Functions

function logger() {
  console.log("My name is Sachin");
}

// calling, running, invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
console.log(num);


///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthyear) {
  return 2037 - birthyear;
}
const age1 = calcAge1(1996);
console.log(age1);

// Function expression
const calcAge2 = function (birthyear) {
  return 2037 - birthyear;
};
const age2 = calcAge2(1996);
console.log(age2);


///////////////////////////////////////
// Arrow functions

const calAge3 = (birthyear) => 2037 - birthyear;
const age3 = calAge3(1996);
console.log(age3);

const yearsUntilRetirement = (birthyear, firstName) => {
  const age = 2037 - birthyear;
  const retirement = 60 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1996, "Sachin"));
console.log(yearsUntilRetirement(1991, "Jonas"));


///////////////////////////////////////
// Functions Calling Other Functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangesPieces} piece of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

///////////////////////////////////////
// Reviewing Functions

const calcAge = function (birthyear) {
  return 2037 - birthyear;
};

const yearsUntilRetirement = function (birthyear, firstName) {
  const age = calcAge(birthyear);
  const retirement = 60 - age;

  // return retirement > 0 ? retirement : -1;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1996, "Sachin"));
console.log(yearsUntilRetirement(1950, "Mike"));
