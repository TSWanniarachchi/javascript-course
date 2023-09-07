"use strict";

///////////////////////////////////////
// PROJECT #3: Pig Game

// Selecting elements
const score0EL = document.getElementById("score--0");
const score1EL = document.getElementById("score--1");
const current0EL = document.querySelector("#current--0");
const current1EL = document.querySelector("#current--1");
const diceEL = document.querySelector(".dice");

// Starting conditions
score0EL.textContent = 0;
score1EL.textContent = 0;
current0EL.textContent = 0;
current1EL.textContent = 0;
diceEL.classList.add("hidden");
