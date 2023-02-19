"use strict";

const btnReset = document.querySelector(".btn-reset");
const btnRollDice = document.querySelector(".btn-roll");
const btnSave = document.querySelector(".btn-save");

const p1 = document.querySelector(".player-one");
const p2 = document.querySelector(".player-two");

const p1name = document.querySelector(".player-one__name");
const p2name = document.querySelector(".player-two__name");

const p1Score = document.querySelector(".player-one-score");
const p2Score = document.querySelector(".player-two-score");

const p1CurrentScore = document.querySelector(".player1-cscore");
const p2CurrentScore = document.querySelector(".player2-cscore");

const dice = document.querySelector(".dice");

dice.classList.add("hide");

let sumRollP1 = [0];
let sumRollP2 = [0];

let pointsP1 = [0];
let pointsP2 = [0];

const throwDice = function () {
  const rollDice = function () {
    return Math.floor(Math.random() * 6) + 1;
  };
  let rollNumber = rollDice();
  dice.src = `./dice${rollNumber}.png`;
  dice.classList.remove("hide");

  if (rollNumber > 1 && p1.classList.contains("active")) {
    sumRollP1.push(rollNumber);
    p1CurrentScore.textContent = sumRollP1.reduce((a, b) => a + b);
  }
  if (rollNumber > 1 && p2.classList.contains("active")) {
    sumRollP2.push(rollNumber);
    p2CurrentScore.textContent = sumRollP2.reduce((a, b) => a + b);
  }
  if (rollNumber === 1 && p1.classList.contains("active")) {
    sumRollP1 = [0];
    p1CurrentScore.textContent = 0;
    p1.classList.remove("active");
    p2.classList.add("active");
  } else if (rollNumber === 1 && p2.classList.contains("active")) {
    sumRollP2 = [0];
    p2CurrentScore.textContent = 0;
    p2.classList.remove("active");
    p1.classList.add("active");
  }
};

const save = function () {
  if (pointsP1.reduce((a, b) => a + b) < 99 && pointsP2.reduce((a, b) => a + b) < 99) {
    if (p1.classList.contains("active")) {
      pointsP1.push(sumRollP1.reduce((a, b) => a + b));
      p1Score.textContent = pointsP1.reduce((a, b) => a + b);
      sumRollP1 = [0];
      p1CurrentScore.textContent = 0;
      p1.classList.remove("active");
      p2.classList.add("active");
    } else if (p2.classList.contains("active")) {
      pointsP2.push(sumRollP2.reduce((a, b) => a + b));
      p2Score.textContent = pointsP2.reduce((a, b) => a + b);
      sumRollP2 = [0];
      p2CurrentScore.textContent = 0;
      p2.classList.remove("active");
      p1.classList.add("active");
    }
  }
  if (pointsP1.reduce((a, b) => a + b) > 99) {
    p1.classList.add("win");
    p1.classList.add("active");
    p1name.textContent = "win 🏆🏆🏆";
    btnRollDice.removeEventListener("click", throwDice);
  } else if (pointsP2.reduce((a, b) => a + b) > 99) {
    p2.classList.add("win");
    p2.classList.add("active");
    p2name.textContent = "win 🏆🏆🏆";
    btnRollDice.removeEventListener("click", throwDice);
  }
};

const newGame = function () {
  sumRollP1 = [0];
  sumRollP2 = [0];
  pointsP1 = [0];
  pointsP2 = [0];
  p1CurrentScore.textContent = 0;
  p1Score.textContent = 0;
  p1name.textContent = "player 1";
  p2CurrentScore.textContent = 0;
  p2Score.textContent = 0;
  p2name.textContent = "player 2";
  dice.src = `./dice1.png`;
  p1.classList.remove("win");
  p1.classList.add("active");
  p2.classList.remove("win");
  p2.classList.remove("active");
  btnRollDice.addEventListener("click", throwDice);
  dice.classList.add("hide");
};

btnRollDice.addEventListener("click", throwDice);
btnSave.addEventListener("click", save);
btnReset.addEventListener("click", newGame);
