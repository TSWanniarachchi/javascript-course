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

/*
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
*/

///////////////////////////////////////
// The this Keyword in Practice

/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1996);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const sachin = {
  year: 1996,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
sachin.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = sachin.calcAge;
matilda.calcAge();

const f = sachin.calcAge;
f();
*/

///////////////////////////////////////
// Regular Functions vs. Arrow Functions

/*
// var firstName = "Sachin";

const sachin = {
  firstName: "Sachin",
  year: 1996,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   // console.log(this);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this); // this = window object
    console.log(`Hey ${this.firstName}`); // window.firstName
  },
  // greet: function () {
  //   console.log(this);
  //   console.log(`Hey ${this.firstName}`);
  // },
};
sachin.greet();
sachin.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 8);
addExpr(2, 8, 5, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
*/

///////////////////////////////////////
// Primitives vs. Objects

/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: "Sachin",
  age: 27,
};
const friend = me;
friend.age = 30;
console.log("Friend: ", friend);
console.log("Me: ", me);
*/

///////////////////////////////////////
// Primitives vs. Objects in Practice

// Primitive types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName);
console.log(oldLastName);

// Reference types
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage: ", jessica);
console.log("After marriage: ", marriedJessica);
// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";
jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");
console.log("Before marriage: ", jessica2);
console.log("After marriage: ", jessicaCopy);
