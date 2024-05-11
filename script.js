// Function to get the computer's choice
function getComputerChoice() {
    const random = Math.random();
    if (random < 0.33) {
        return 'rock';
    } else if (random < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Function to get the human's choice
function getHumanChoice() {
    let userInput = prompt("Pick Rock, Paper, or Scissors").toLowerCase();
    while (userInput !== 'rock' && userInput !== 'paper' && userInput !== 'scissors') {
        console.log("Invalid input. Please pick Rock, Paper, or Scissors.");
        userInput = prompt("Pick Rock, Paper, or Scissors").toLowerCase();
    }
    return userInput;
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

// Function to play the entire game
function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    console.log(`Final Score: You - ${humanScore}, Computer - ${computerScore}`);
}

let humanScore = 0;
let computerScore = 0;

// Start the game
playGame();
