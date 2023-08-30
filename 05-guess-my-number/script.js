"use strict";

///////////////////////////////////////
// PROJECT #1: Guess My Number!

/*
console.log(document.querySelector(".message").textContent);
*/

///////////////////////////////////////
// Selecting and Manipulating Elements

console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉 Correct Number";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 25;
console.log(document.querySelector(".guess").value);
