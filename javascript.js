
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

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors";

        
    }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));