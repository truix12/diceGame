"use strict";

const btnReset = document.querySelector(".btn-reset");
const btnRollDice = document.querySelector(".btn-roll");
const btnSave = document.querySelector(".btn-save");

const player1Score = document.querySelector(".player-one-score");
const player2Score = document.querySelector(".player-two-score");

const p1CurrentScore = document.querySelector(".player1-cscore");
const p2CurrentScore = document.querySelector(".player2-cscore");

const dice = document.querySelector(".dice");

let sumRoll = [];

btnRollDice.addEventListener("click", function () {
  const rollDice = function () {
    return Math.floor(Math.random() * 6) + 1;
  };
  let rollNumber = rollDice();
  console.log(rollNumber);
  dice.src = `/dice${rollNumber}.png`;

  if (rollNumber > 1) {
    sumRoll.push(rollNumber);
    console.log(sumRoll);
    p1CurrentScore.textContent = sumRoll.reduce((a, b) => a + b);
  } else {
    sumRoll = [];
    p1CurrentScore.textContent = 0;
  }
});
