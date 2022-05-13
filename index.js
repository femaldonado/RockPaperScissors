//computer needs to pick a random choice 
function computerPlay() {

  const computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice == 1) {
    return "rock";
  }

  if (computerChoice == 2) {
    return "paper";
  }

  return "scissors";
}
//describe possibilities, keep score and print text 
function playRound(playerSelection, computerSelection) {

  if (playerSelection.toLowerCase() === "rock") {
    if (computerSelection === "rock") {
      return "Tie!";

    } else if (computerSelection === "paper") {
      computerScore++;
      return "Robot Wins";

    } else {
      playerScore++;
      return "You Win";
    }
  }

  if (playerSelection.toLowerCase() === "paper") {
    if (computerSelection === "rock") {
      playerScore++;
      return "You Win";

    } else if (computerSelection === "scissors") {
      computerScore++;
      return "Robot Wins";

    } else {
      return "Tie";
    }
  }
  if (playerSelection.toLowerCase() === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      return "Robot Wins";

    } else if (computerSelection === "paper") {
      playerScore++;
      return "You Win";

    } else {
      return "Tie";
    }
  }
}

playerScore = parseInt(0);
computerScore = parseInt(0);
//needs to play 5x in a loop and show score 
function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose rock, paper or scissors");
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log("Your score = " + playerScore);
    console.log("Robot score = " + computerScore);
  }
}
//call game 
game();
