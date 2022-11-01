
/* Generates number 0 to 1 then * to max number (JS starts at 0),
rounds to nearest integer below, then assigns everything to x
x = Math.floor(Math.random() * 3);
console.log(x);
*/




function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    
        if (choice === 0) {
            return "Rock";
        }
        
        else if (choice === 1) {
            return "Paper";
        }

        else if (choice === 2) {
            return "Scissors";
        }

        else {
            return "Error";
        }
    }

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You win! Paper beats Rock!";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win! Scissors beats Paper!";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You lose! Paper beats Rock!";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You lose! Scissors beats Paper!";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You lose! Rock beats Scissors!";
    } else if (playerSelection === computerSelection) {
        return `You've tied -- ${playerSelection} to ${computerSelection}!`;
    } else {
        return "Error";
    }
    
}

const playerSelection = "Scissors";
const computerSelection = getComputerChoice();

console.log("Player choice: " + playerSelection);
console.log("Computer choice: " + computerSelection);

console.log(playRound(playerSelection, computerSelection));

