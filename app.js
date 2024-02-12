console.log("Welcome to RPS GAME");

let userWin = 0;
let computerWin = 0;
const resultDisplay = document.querySelector('.result');
const refreshButton = document.querySelector('#refresh');
console.log(refreshButton);
const buttons = document.querySelectorAll('.selectbutton');

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie! Both chose [" + playerSelection + "].";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    userWin += 1;
    return (
      "You win! [" + playerSelection + "] beats [" + computerSelection + "]."
    );
  } else {
    computerWin += 1;
    return (
      "You lose! [" + computerSelection + "] beats [" + playerSelection + "]."
    );
  }
}

function displayResult(resultLog) {
  const message = document.createElement('p');
  message.textContent = resultLog;
  resultDisplay.appendChild(message);
}

function displayScore() {
  const scoreMessage = document.createElement('p');
  scoreMessage.textContent = `Score: You ${userWin} - Computer ${computerWin}`;
  resultDisplay.appendChild(scoreMessage);
}

function checkWinner() {
  if (userWin >= 3 || computerWin >= 3) {
    refreshButton.classList.remove('hidden'); // Remove the 'hidden' class
    buttons.forEach(button => {
      button.style.display = 'none';
    });
    const winnerMessage = document.createElement('p');
    if (userWin >= 3) {
      winnerMessage.textContent = "You won the game!";
    } else {
      winnerMessage.textContent = "Computer won the game!";
    }
    resultDisplay.appendChild(winnerMessage);
  }
}

function handleClick(event) {
  const playerSelection = event.target.id;
  const computerSelection = computerPlay();
  const resultLog = playRound(playerSelection, computerSelection);
  displayResult(resultLog);
  displayScore();
  checkWinner();
}

buttons.forEach(button => {
  button.addEventListener('click', handleClick);
});

refreshButton.addEventListener('click', () => {
  location.reload();
});
