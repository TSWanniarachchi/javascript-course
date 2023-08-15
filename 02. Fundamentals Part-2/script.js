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
*/

///////////////////////////////////////
// CHALLENGE #1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team). A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

1. Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).
2. Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).
3. Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).
4. Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
*/

// 1.
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// 2.
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

// 3., 5.
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};

// 4.
checkWinner(scoreDolphins, scoreKoalas);
