function getRandomNumber(maxNum) {
  return Math.floor(Math.random() * maxNum);
}

function computerPlay() {
  // returns random number between 0-2
  const computerChoice = getRandomNumber(3);
  const choices = ["rock", "paper", "scissors"];

  return choices[computerChoice];
}

function formatSelection(choice) {
  return choice.toUpperCase();
}

function isPlayerOneWinner(choiceOne, choiceTwo) {
  return (
    (choiceOne === "ROCK" && choiceTwo === "SCISSORS") ||
    (choiceOne === "SCISSORS" && choiceTwo === "PAPER") ||
    (choiceOne === "PAPER" && choiceTwo === "ROCK")
  );
}

function playRound(playerOneChoice, playerTwoChoice) {
  const formattedPlayerOneChoice = formatSelection(playerOneChoice);
  const formattedPlayerTwoChoice = formatSelection(playerTwoChoice);

  if (formattedPlayerOneChoice === formattedPlayerTwoChoice) {
    return "It's a tie!";
  }

  const didPlayerOneWin = isPlayerOneWinner(
    formattedPlayerOneChoice,
    formattedPlayerTwoChoice
  );

  if (didPlayerOneWin) {
    return `You Win! ${playerOneChoice.toLowerCase()} beats ${playerTwoChoice.toLowerCase()}`;
  }

  return `You Lose! ${playerTwoChoice.toLowerCase()} beats ${playerOneChoice.toLowerCase()}`;
}

function game() {
  for (let round = 1; round <= 5; round++) {
    const playerSelection = prompt(`Round ${round}: Rock, Paper, or Scissors?`);
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game()
