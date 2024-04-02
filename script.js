function getComputerChoice() {
	const computerChoice = Math.random();
	if (computerChoice < ( 1 / 3) ) {
		return "rock";
	} else if (computerChoice > ( 2 / 3) ) {
		return "scissors";
	} else {
		return "paper";
	}
}

function playRound(playerSelection, computerSelection) {
	let playerSelectionCaseInsensitive = playerSelection.toLowerCase();
	
	if (playerSelectionCaseInsensitive === computerSelection) {
		console.log(`You chose the ${playerSelectionCaseInsensitive}\nComputer chose the ${computerSelection}\n\nIT'S A DRAW!`);
	} else if (
		(playerSelectionCaseInsensitive === "rock" && computerSelection === "scissors") || 
		(playerSelectionCaseInsensitive === "paper" && computerSelection === "rock") || 
		(playerSelectionCaseInsensitive === "scissors" && computerSelection === "paper") 
		) {
		console.log(`You chose the ${playerSelectionCaseInsensitive}\nComputer chose the ${computerSelection}\n\nYOU WIN!`);
	} else {
		console.log(`You chose the ${playerSelectionCaseInsensitive}\nComputer chose the ${computerSelection}\n\nCOMPUTER WIN!`);
	}
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));