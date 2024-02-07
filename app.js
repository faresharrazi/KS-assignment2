console.log("Welcome to RPS GAME");

// Step a: Create a function to make the computer's play
function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Step b: Test the computerPlay function
console.log("** This is a test **");
console.log(computerPlay());
console.log("** End of the test **");

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

// Test the playRound function
const playerSelection = "rock"; // You can enter different values for testing
const computerSelection = computerPlay(); // Using the previously defined computerPlay function
console.log(playRound(playerSelection, computerSelection));
console.log("Refresh for a new round");

// Step e:
console.log("Step e starts here");
// prompt()
const playerSelection = prompt(
  `Input your choice! "Rock 🤜🏼" "Paper 👋🏼" "Scissors ✌🏼"`
).toLowerCase();
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
