"use strict";

const country = "Sri-Lanka";
const continent = "Asia";
const population = 22.16;
const isIsland = true;
const language = "Sinhala";

// const myCountry = {
//   country: "Sri-Lanka",
//   capital: "Sri-Jayawardhanapura Kotte",
//   language: "Sinhala",
//   population: 22.16,
//   neighbours: ["India", "Pakisthan", "Bangladesh", "China"],
// };

////////////////////////////////////
// Functions

/*
// 1.
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

// 2.
const country1 = describeCountry(
  country,
  population,
  "Sri-Jayawardhanapura Kotte"
);
const country2 = describeCountry("India", 1408, "Delhi");
const country3 = describeCountry("United Kingdom", 67, "London");

console.log(country1);
console.log(country2);
console.log(country3);
*/

////////////////////////////////////
// Function Declarations vs. Expressions

/*
// 1., 2.
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

// 3.
const percSrilanka1 = percentageOfWorld1(population);
const percIndia1 = percentageOfWorld1(1408);
const percUnitedKingdom1 = percentageOfWorld1(67);
console.log(percSrilanka1, percIndia1, percUnitedKingdom1);

// 4.
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percSrilanka2 = percentageOfWorld2(population);
const percIndia2 = percentageOfWorld2(1408);
const percUnitedKingdom2 = percentageOfWorld2(67);
console.log(percSrilanka2, percIndia2, percUnitedKingdom2);
*/

////////////////////////////////////
// Arrow functions

/*
// 1.
const percentageOfWorld3 = (population) => (population / 7900) * 100;
const percSrilanka3 = percentageOfWorld3(population);
const percIndia3 = percentageOfWorld3(1408);
const percUnitedKingdom3 = percentageOfWorld3(67);
console.log(percSrilanka3, percIndia3, percUnitedKingdom3);
*/

////////////////////////////////////
// Functions Calling Other Functions

/*
// 1.
function describePopulation(country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )}% of the world.'`;
}

// 2.
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

// 3.
console.log(describePopulation(country, population));
console.log(describePopulation("India", 1408));
console.log(describePopulation("United Kingdom", 67));
*/

////////////////////////////////////
// Introduction to Arrays

/*
// 1.
const populations = [22.16, 1408, 67, 24];

// 2.
console.log(populations.length === 4);

// 3.
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[populations.length - 1]),
];
console.log(percentages);
*/

///////////////////////////////////////
// Basic Array Operations (Methods)

/*
// 1.
const neighbours = ["India", "Pakisthan", "Bangladesh", "China"];

// 2.
neighbours.push("Utopia");
console.log(neighbours);

// 3.
neighbours.pop();
console.log(neighbours);

// 4.
if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}

// 5.
const index = neighbours.indexOf("India");
neighbours[index] = "Republic of India";
console.log(neighbours);
*/

///////////////////////////////////////
// Introduction to Objects

/*
// 1.
const myCountry = {
  country: "Sri-Lanka",
  capital: "Sri-Jayawardhanapura Kotte",
  language: "Sinhala",
  population: 22.16,
  neighbours: ["India", "Pakisthan", "Bangladesh", "China"],
};
*/

///////////////////////////////////////
// Dot vs. Bracket Notation

/*
// 1.
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

// 2.
myCountry.population += 2;
console.log(myCountry.population);

myCountry["population"] -= 2;
console.log(myCountry.population);
*/

///////////////////////////////////////
// Object Methods

/*
// 1.
const myCountry = {
  country: "Sri-Lanka",
  capital: "Sri-Jayawardhanapura Kotte",
  language: "Sinhala",
  population: 22.16,
  neighbours: ["India", "Pakisthan", "Bangladesh", "China"],

  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;

    // Even simpler version (see why this works...) => Truthy and Falsy Values
    // this.isIsland = !Boolean(this.neighbours.length);
  },
};

// 2.
myCountry.describe();

// 3.
myCountry.checkIsland();
console.log(myCountry);
*/

///////////////////////////////////////
// Iteration: The for Loop

/*
// 1.
for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting!`);
}
*/

///////////////////////////////////////
// Looping Arrays, Breaking and Continuing

// 1.
const populations = [22.16, 1408, 67, 24];

// 2., 3.
const percentages2 = [];

const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100;
};

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);
