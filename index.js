function computerPlay() {
  let computerChoice = Math.floor(Math.random() * 3)

  if (computerChoice == 1) {
    return "rock";
  }

  if (computerChoice == 2) {
    return "paper";
  }

  return "scissors";
}

function playRound(playerSelection, computerSelection) {
  if (
    playerSelection.toUpperCase() === "ROCK" &&
    computerSelection === "paper"
  ) {
    return "You Lose! Paper beats Rock";
  } else if (
    playerSelection.toUpperCase() === "ROCK" &&
    computerSelection === "Rock"
  ) {
    return "It's a tie!";
  } else if (
    playerSelection.toUpperCase() === "ROCK" &&
    computerSelection === "Scissors"
  ) {
    return "You win, Rock beats Scissors!";
  }

  if (
    playerSelection.toUpperCase() === "SCISSORS" &&
    computerSelection === "Rock"
  ) {
    return "You lose,Rock beats Scissors!";
  } else if (
    playerSelection.toUpperCase() === "SCISSORS" &&
    computerSelection === "Scissors"
  ) {
    return "It's a tie!";
  } else if (
    playerSelection.toUpperCase() === "SCISSORS" &&
    computerSelection === "Paper"
  ) {
    return "You win, Scissors beats Paper!";
  }

  if (
    playerSelection.toUpperCase() === "PAPER" &&
    computerSelection === "Scissors"
  ) {
    return "You lose, Scissors beats Paper!";
  } else if (
    playerSelection.toUpperCase() === "PAPER" &&
    computerSelection === "Paper"
  ) {
    return "It's a tie!";
  } else if (
    playerSelection.toUpperCase() === "PAPER" &&
    computerSelection === "Rock"
  ) {
    return "You win, Paper beats Rock!";
  }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

//for (let i = 0; i < 5; i++) {
// your code here!
//}

//function playerPlay() {
//let playerSelection = ["rock", "paper", "scissors"];
// }
