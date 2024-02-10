console.log("Welcome to RPS GAME");

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
  const selection = prompt(`Input your choice! "Rock" "Paper" "Scissors"`);

  // Handling the Cancellation Scenario: 
  if (selection === null) {
    const confirmation = prompt('Are you sure you want to exit the game? (Y/N)');
    if (confirmation !== null && confirmation.toLowerCase().trim() === 'y') {
      return null; // Exit if user confirms
    } else {
      return inputValidation(); // Recursively call inputValidation() again
    }
  }

  // Handling a non Cancelaltion Scenarios: 
    const trimmedInput = selection.toLowerCase().trim();
    if (trimmedInput === "") {
      alert("You can't input an empty choice!");
      return inputValidation(); // Recursively call inputValidation() again
  } else if (["rock", "paper", "scissors"].includes(trimmedInput)) {
      return trimmedInput;
  } else {
    alert(`Wrong input, try again!🥴 Please enter "Rock" "Paper" "Scissors"`);
    return inputValidation(); // Recursively call inputValidation() again
  }
}

function displayMessage (playerOne,playerTwo) {
  console.log(`>>>> Game score: ${playerOne}:${playerTwo} <<<<`);
  //final result
  if (playerOne > playerTwo) {
    console.log(
      "%cYou won the GAME and saved the world 😀 You are a hero!",
      "color: green; font-size: 16px"
    );
  } else if (playerOne < playerTwo) {
    console.log(
      "%cOh no, the computer won 😈 and will now take over the world",
      "color: blue; font-size: 16px"
    );
  }
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
    }
    // If one of the Players gets 3 points there is no need to continue the Game
    if (userWin >= 3 || computerWin >=3) {
      break;
    }
  }
  
  displayMessage(userWin, computerWin);
  
}
game();
console.log("refresh the page to start a new game");
