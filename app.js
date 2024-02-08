console.log("Welcome to RPS GAME");

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "It's a tie! Both chose [" + playerSelection + "].";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return (
      "You win! [" + playerSelection + "] beats [" + computerSelection + "]."
    );
  } else {
    return (
      "You lose! [" + computerSelection + "] beats [" + playerSelection + "]."
    );
  }
}

function inputValidation() {
  let selection = prompt(`Input your choice! "Rock" "Paper" "Scissors"`);
  if (selection === null) {
    console.log("User canceled the game. 🥲");
    return null;
  }
  selection = selection.toLowerCase();
  while (
    selection !== "rock" &&
    selection !== "paper" &&
    selection !== "scissors"
  ) {
    selection = prompt(
      `Wrong input, try again!🥴 Please enter "Rock" "Paper" "Scissors"`
    );
    if (selection === null) {
      console.log("User canceled the game.🥲");
      return null;
    }
    selection = selection.toLowerCase();
  }
  return selection;
}

function game() {
  let userWin = 0;
  let computerWin = 0;

  for (let i = 0; i < 5; i++) {
    console.log(`** Round ${i + 1} **`);
    const playerSelection = inputValidation();

    if (playerSelection === null) {
      console.log("Game canceled.");
      return;
    }
    const computerSelection = computerPlay();
    console.log(
      `Your choice is ${playerSelection} and computer\'s choice is ${computerSelection}`
    );
    const resultLog = playRound(playerSelection, computerSelection);
    console.log(resultLog);

    if (resultLog.includes("You win!")) {
      userWin += 1;
    } else if (resultLog.includes("You lose!")) {
      computerWin += 1;
    } else if (resultLog.includes("It's a tie!")) {
      userWin += 1;
      computerWin += 1;
    }
  }
  console.log(`>>>> Game score: ${userWin}:${computerWin} <<<<`);
  //final result
  if (userWin > computerWin) {
    console.log(
      "%cYou won the GAME and saved the world 😀 You are a hero!",
      "color: green; font-size: 16px"
    );
  } else if (userWin < computerWin) {
    console.log(
      "%cOh no, the computer won 😈 and will now take over the world",
      "color: blue; font-size: 16px"
    );
  }
  
}
game();
console.log("refresh the page to start a new game");
