"use strict";

///////////////////////////////////////
// PROJECT #3: Pig Game

// Selecting elements
const score0EL = document.getElementById("score--0");
const score1EL = document.getElementById("score--1");
const current0EL = document.querySelector("#current--0");
const current1EL = document.querySelector("#current--1");
const diceEL = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// State variables
let currentScore = 0;

// Starting conditions
score0EL.textContent = 0;
score1EL.textContent = 0;
current0EL.textContent = 0;
current1EL.textContent = 0;
diceEL.classList.add("hidden");

// New game functionality
btnNew.addEventListener("click", function () {
  console.log("clicked New");
});

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // 2. Display dice
  if (diceEL.classList.contains("hidden")) diceEL.classList.remove("hidden");
  diceEL.src = `dice-${dice}.png`;

  // 3. Check for rolled 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    current0EL.textContent = currentScore; // NOTE: CHANGE LATER
  } else {
    // Switch to next player
  }
});

// Hold functionality
btnHold.addEventListener("click", function () {
  console.log("clicked Hold");
});
