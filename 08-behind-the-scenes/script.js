"use strict";

///////////////////////////////////////
// Scoping in Practice

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // Creating NEW variable with same name as outer scope's variable
      const firstName = "Tharindu";
      // Reassigning outer scope's variable
      output = "NEW OUTPUT!";

      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = "Sachin";
calcAge(1996);

// console.log(age);
// printAge();
*/

///////////////////////////////////////
// Hoisting and TDZ in Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = "Sachin";
let job = "Student";
const year = 1996;

// Functions
console.log(addDecl(5, 6));
// console.log(addExpr(5, 6));
console.log(addArrow);
// console.log(addArrow(5, 6));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => {
  return a + b;
};

// Exaample 1
console.log(numProducts); // undefined = falsy value
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}

// Exaample 2
// Variables declared with var, will create a property on the global window object. And that can have some implications in some cases.
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
