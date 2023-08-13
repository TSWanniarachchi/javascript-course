const country = "Sri-Lanka";
const continent = "Asia";
const population = 22.16;
const isIsland = true;
const language = "Sinhala";

////////////////////////////////////
// Functions

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

////////////////////////////////////
