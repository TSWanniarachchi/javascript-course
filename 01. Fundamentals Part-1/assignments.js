/*
////////////////////////////////////
// Values and Variables

// 1.
let country = "Sri-Lanka";
let continent = "Asia";
let population = 22.16;

// 2.
console.log(country);
console.log(continent);
console.log(population);

console.log(
  "My country is " +
    country +
    " located in " +
    continent +
    ". It has a population of approximately " +
    population +
    " million."
);

////////////////////////////////////
// Data Types

// 1.
let isIsland = true;
let language;

// 2.
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

////////////////////////////////////
// let, const and var

// 1.
language = "Sinhala";

// 2.
// const country = "Sri-Lanka";
// const continent = "Asia";
// const isIsland = true;

// 3.
// isIsland = false;

////////////////////////////////////
// Basic Operators

// 1.
console.log(population / 2);

// 2.
population++;
console.log(population);

// 3.
console.log(population > 6);

// 4.
console.log(population < 33);

// 5.
const description =
  country +
  " is in " +
  continent +
  ", and it's " +
  population +
  " million people speak " +
  language;
console.log(description);

////////////////////////////////////
// Strings and Template Literals

// 1.
const descriptionNew = `${country} is in ${continent}, and it's ${population} million people speak ${language}.`;
console.log(descriptionNew);
*/

////////////////////////////////////
// Taking Decisions: if / else Statements

// 2.
// population = 130;

// 1.
if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average.`
  );
}
