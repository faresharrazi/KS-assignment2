console.log("Welcome to RPS GAME");

// Step a: Create a function to make the computer's play
function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Step b: Test the computerPlay function
// console.log("** This is a test **");
// console.log(computerPlay());
// console.log("** End of the test **");

// Step c and d:Function that plays one round of RPS
function playRound(playerSelection, computerSelection) {
  // Make playerSelection case-insensitive
  playerSelection = playerSelection.toLowerCase();

  // Check for valid playerSelection
  if (
    playerSelection !== "rock" &&
    playerSelection !== "paper" &&
    playerSelection !== "scissors"
  ) {
    return "Invalid selection. Please choose Rock, Paper, or Scissors.";
  }

  // Determine the winner of the round
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

const computerSelection = computerPlay(); // Using the previously defined computerPlay function

// Step e:
let playerSelection = prompt(
  `Input your choice! "Rock 🤜🏼" "Paper 👋🏼" "Scissors ✌🏼"`
).toLowerCase();

function playerSelectionValidation() {
  switch (playerSelection) {
    case "rock":
      console.log(
        `Your choice is ${playerSelection} and computer\'s choice is ${computerSelection}`
      );
      break;
    case "paper":
      console.log(
        `Your choice is ${playerSelection} and computer\'s choice is ${computerSelection}`
      );
      break;
    case "scissors":
      console.log(
        `Your choice is ${playerSelection} and computer\'s choice is ${computerSelection}`
      );
      break;
    default:
      console.log(
        prompt(`Wrong input, try again! 🥴 "Rock 🤜🏼" "Paper 👋🏼" "Scissors ✌🏼"`)
      );
  }
}

playerSelectionValidation();

function game() {
  let userWin = 0;
  let computerWin = 0;

  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}`);
    const resultLog = playRound(playerSelection, computerSelection);
    console.log(resultLog);

    if (resultLog.includes("You win!")) {
      userWin += 1;
    } else if (resultLog.includes("You lose!")) {
      computerWin += 1;
    }

    if (i < 4) {
      playerSelection = prompt(
        `Input your choice! "Rock 🤜🏼" "Paper 👋🏼" "Scissors ✌🏼"`
      ).toLowerCase();

      playerSelectionValidation();
    }
  }

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
  console.log("refresh the page to start a new game");
}

game();
