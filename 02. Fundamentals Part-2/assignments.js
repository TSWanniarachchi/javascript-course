"use strict";

const country = "Sri-Lanka";
const continent = "Asia";
const population = 22.16;
const isIsland = true;
const language = "Sinhala";

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
