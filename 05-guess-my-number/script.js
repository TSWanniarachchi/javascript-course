"use strict";

///////////////////////////////////////
// PROJECT #1: Guess My Number!

/*
console.log(document.querySelector(".message").textContent);
*/

///////////////////////////////////////
// Selecting and Manipulating Elements

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉 Correct Number";
console.log(document.querySelector(".message").textContent);

document.querySelector(".secretNumber").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 25;
console.log(document.querySelector(".guess").value);
*/

///////////////////////////////////////
// Handling Click Events

/*
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number!";
  }
});
*/

///////////////////////////////////////
// Implementing the Game Logic

// state varibles
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".number").textContent = secretNumber;
document.querySelector(".score").textContent = score;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "👎 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "👎 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
