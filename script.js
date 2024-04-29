"use strict";

// Declaring Variables
const resetScoresBtn = document.querySelector(".restart-btn");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const actions = ["rock", "paper", "scissors"];
const results = document.querySelector(".player-win");
let playerPlayMove; // assign it with a function

// Create a function to pick the player move
function playerChoice(move) {
  playerPlayMove = move;
  playGame(); // Call playGame after player's move
}

// The main PlayGame function
function playGame() {
  // create a random number then assign the computer move to be random
  const randomMove = Math.floor(Math.random() * 3);
  const computerMove = actions[randomMove];

  // check if it is a draw condition
  if (playerPlayMove === computerMove) {
    results.textContent = "Draw!";
    results.style.color = "white"; // changing message to white
  } else {
    // checking winner and adding the winner score by 1
    switch (playerPlayMove) {
      case "rock":
        if (computerMove === "scissors") {
          results.textContent = "You Win!";
          playerScore.textContent = parseInt(playerScore.textContent) + 1;
        } else {
          results.textContent = "You Lost!";
          computerScore.textContent = parseInt(computerScore.textContent) + 1;
        }
        break;
      case "paper":
        if (computerMove === "rock") {
          results.textContent = "You Win!";
          playerScore.textContent = parseInt(playerScore.textContent) + 1;
        } else {
          results.textContent = "You Lost!";
          computerScore.textContent = parseInt(computerScore.textContent) + 1;
        }
        break;
      case "scissors":
        if (computerMove === "paper") {
          results.textContent = "You Win!";
          playerScore.textContent = parseInt(playerScore.textContent) + 1;
        } else {
          results.textContent = "You Lost!";
          computerScore.textContent = parseInt(computerScore.textContent) + 1;
        }
        break;
    }
    // changing winner message color to green/red
    results.style.color = results.textContent === "You Win!" ? "green" : "red";
  }
}

// Resetting the scores when the Reset button is clicked
resetScoresBtn.addEventListener("click", () => {
  playerScore.textContent = 0;
  computerScore.textContent = 0;
});
