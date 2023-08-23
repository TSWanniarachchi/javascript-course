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

Your tasks:
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

Your tasks:
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

/*
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
*/

///////////////////////////////////////
// Object Methods

/*
const sachin = {
  firstName: "Sachin",
  lastName: "Wanniarachchi",
  birthYear: 1996,
  job: "Student",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: false,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age; // good practice
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

// console.log(sachin.calcAge(1996));
// console.log(sachin["calcAge"](1996));

// console.log(sachin.calcAge());
// console.log(sachin["calcAge"]());

console.log(sachin.calcAge());

console.log(sachin.age);
console.log(sachin.age);
console.log(sachin.age);

// Challenge
// "Sachin is a 41-year old student, and he has a/no driver's license."
console.log(sachin.getSummary());
*/

///////////////////////////////////////
// CHALLENGE #3

/*
Let's go back to Mark and John comparing their BMIs!
This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.
2. Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
*/

/*
// 1., 2.
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

// 3.
mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})!`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})!`
  );
} else {
  console.log(`Both have same BMI values!`);
}
*/

///////////////////////////////////////
// Iteration: The for Loop

/*
console.log("Lifting weights repetition 1 🏋️‍♀️");
console.log("Lifting weights repetition 2 🏋️‍♀️");
console.log("Lifting weights repetition 3 🏋️‍♀️");
console.log("Lifting weights repetition 4 🏋️‍♀️");
console.log("Lifting weights repetition 5 🏋️‍♀️");
console.log("Lifting weights repetition 6 🏋️‍♀️");
console.log("Lifting weights repetition 7 🏋️‍♀️");
console.log("Lifting weights repetition 8 🏋️‍♀️");
console.log("Lifting weights repetition 9 🏋️‍♀️");
console.log("Lifting weights repetition 10 🏋️‍♀️");

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
*/

///////////////////////////////////////
// Looping Arrays, Breaking and Continuing

/*
const sachinArray = [
  "Sachin",
  "Wanniarachchi",
  2037 - 1996,
  "Student",
  ["Michael", "Peter", "Steven"],
  true,
];
const types = [];

// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

for (let i = 0; i < sachinArray.length; i++) {
  // Reading from array
  console.log(sachinArray[i], typeof sachinArray[i]);

  // Filling types array
  // types[i] = typeof sachinArray[i];
  types.push(typeof sachinArray[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// Continue and Break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < sachinArray.length; i++) {
  if (typeof sachinArray[i] !== "string") continue;

  console.log(sachinArray[i], typeof sachinArray[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < sachinArray.length; i++) {
  if (typeof sachinArray[i] === "number") break;

  console.log(sachinArray[i], typeof sachinArray[i]);
}
*/

///////////////////////////////////////
// Looping Backwards and Loops in Loops

/*
const sachinArray = [
  "Sachin",
  "Wanniarachchi",
  2037 - 1996,
  "Student",
  ["Michael", "Peter", "Steven"],
  true,
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = sachinArray.length - 1; i >= 0; i--) {
  console.log(i, sachinArray[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}
*/

///////////////////////////////////////
// The while Loop

/*
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`FOR: Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
*/

///////////////////////////////////////
// CHALLENGE #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:
1. Create an array called bills containing all 10 test bill values.
2. Create empty arrays for the tips and the totals (tips and totals)
3. Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

BONUS:
Write a function calcAverage which takes an array called arr as an argument. This function calculates the 2. average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

1. First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.
2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).
3.Call the function with the totals array.
*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// TASKS:
// 1.
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// 2.
const tips = [];
const totals = [];

// 3.
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

// BONUS:
// 1., 2.
const calcAverage = function (arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
};

// 3.
console.log(calcAverage(totals));
