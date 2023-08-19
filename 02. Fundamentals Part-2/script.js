"use strict";

////////////////////////////////////
// Activating Strict Mode

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive a 🚗");

// const interface = "Audio";
// const private = 534;
*/

///////////////////////////////////////
// Functions

/*
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
*/

///////////////////////////////////////
// Function Declarations vs. Expressions

/*
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
*/

///////////////////////////////////////
// Arrow functions

/*
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
*/

///////////////////////////////////////
// Functions Calling Other Functions

/*
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

/*
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

/*
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
*/

///////////////////////////////////////
// Introduction to Arrays

/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years1 = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Joy";
console.log(friends);
// friends = ["Root", "Kevin"];

const firstName = "Sachin";
const sachin = [firstName, "Wanniarachchi", 2037 - 1996, "Student", friends];
console.log(sachin);
console.log(sachin.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/

///////////////////////////////////////
// Basic Array Operations (Methods)

/*
const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Joy");
console.log(friends);
console.log(newLength);

friends.unshift("Sachin");
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bobi"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bobi"));
console.log(friends.includes("23"));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
} else {
  console.log("Steven is not your friend");
}
*/

///////////////////////////////////////
// CHALLENGE #2

/*
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So, create an array called bills containing the test data below.
3. Create an array called tips containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.
*/

/*
// 1.
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(calcTip(100));

// 2.
const bills = [125, 555, 44];
console.log(bills);

// 3.
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

// 4.
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);
*/

///////////////////////////////////////
// Introduction to Objects

/*
// Array
const sachinArray = [
  "Sachin",
  "Wanniarachchi",
  2037 - 1996,
  "Student",
  ["Michael", "Peter", "Steven"],
];

// Object
const sachinObject = {
  firstName: "Sachin",
  lastName: "Wanniarachchi",
  age: 2037 - 1996,
  job: "Student",
  friends: ["Michael", "Peter", "Steven"],
};
*/

///////////////////////////////////////
// Dot vs. Bracket Notation

const sachin = {
  firstName: "Sachin",
  lastName: "Wanniarachchi",
  age: 2037 - 1996,
  job: "Student",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(sachin);

console.log(sachin.firstName);
console.log(sachin["firstName"]); // [] we could put any expression or compute the property names

const nameKey = "Name";
console.log(sachin["first" + nameKey]);
console.log(sachin["last" + nameKey]);

// console.log(jonas.'last' + nameKey)

const interestedIn = prompt(
  "What do you want to know about Sachin? Choose between firstName, lastName, age, job, and friends"
);
console.log(sachin.interestedIn); // undefined
console.log(sachin[interestedIn]); // Student

if (sachin[interestedIn]) {
  console.log(sachin[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

sachin.location = "Nugegoda";
sachin["twitter"] = "@TSWanniarchchi";
console.log(sachin);

// Challenge
// "Sachin has 3 friends, and his best friend is called Michael"
console.log(
  `${sachin.firstName} has ${sachin.friends.length} friends, and his best friend is called ${sachin.friends[0]}`
);
