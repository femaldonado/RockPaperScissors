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
    return { message: "It's a tie!", winner: 0 };
  }

  const didPlayerOneWin = isPlayerOneWinner(
    formattedPlayerOneChoice,
    formattedPlayerTwoChoice
  );

  if (didPlayerOneWin) {
    return {
      message: `You Win! ${playerOneChoice.toLowerCase()} beats ${playerTwoChoice.toLowerCase()}`,
      winner: 1
    };
  }

  return {
    message: `You Lose! ${playerTwoChoice.toLowerCase()} beats ${playerOneChoice.toLowerCase()}`,
    winner: 2
  };
}

function game() {
  const scoreboard = { playerOne: 0, playerTwo: 0 };

  for (let round = 1; round <= 5; round++) {
    const playerSelection = prompt(`Round ${round}: Rock, Paper, or Scissors?`);
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    if (result.winner === 1) {
      ++scoreboard.playerOne;
    } else {
      ++scoreboard.playerTwo;
    }

    console.log(`ROUND ${round}: ${result.message}`);
  }

  // TODO - FIX BUG WITH FINAL SCORE

  console.log(
    `FINAL SCORE: PLAYER ONE ${scoreboard.playerOne} | PLAYER TWO ${scoreboard.playerTwo}`
  );
}

game();
