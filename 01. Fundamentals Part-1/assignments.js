////////////////////////////////////
// Values and Variables

// 1.
let country = "Sri-Lanka";
let continent = "Asia";
let population = 22.16;

/*
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
*/

////////////////////////////////////
// Data Types

// 1.
let isIsland = true;
let language;

/*
// 2.
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
*/

////////////////////////////////////
// let, const and var

// 1.
language = "Sinhala";

/*
// 2.
// const country = "Sri-Lanka";
// const continent = "Asia";
// const isIsland = true;

// 3.
// isIsland = false;
*/

////////////////////////////////////
// Basic Operators

/*
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
*/

////////////////////////////////////
// Strings and Template Literals

/*
// 1.
const descriptionNew = `${country} is in ${continent}, and it's ${population} million people speak ${language}.`;
console.log(descriptionNew);
*/

////////////////////////////////////
// Taking Decisions: if / else Statements

/*
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
*/

////////////////////////////////////
// Type Conversion and Coercion

/*
// 1., 2.
console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); // "617"
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // false
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143
*/

////////////////////////////////////
// Equality Operators: == vs. ===

/*
// 1.
const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);

// 2., 3., 4., 5., 6., 7., 8.
if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}
*/

////////////////////////////////////
// Logical Operators

/*
// 1., 2., 3., 4., 5.
if (language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}
*/

////////////////////////////////////
// The switch Statement

// 1.
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}
