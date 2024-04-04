let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();
let computerScore = 0;
let playerScore = 0;

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

function getPlayerChoice() {

	const playerSelectionCaseInsensitive = prompt('Enter your choice: "rock", "paper" or "scissors"').toLowerCase();
	
	if ( 
		(playerSelectionCaseInsensitive === "rock") || 
		(playerSelectionCaseInsensitive === "paper") || 
		(playerSelectionCaseInsensitive === "scissors")
		) {
		return playerSelectionCaseInsensitive;
	} else {
		return null;
	}

}

function playRound() {

	if (playerSelection === null) {
		console.log(`You entered the undefined word\n\nPlease, enter one of these words:\n"rock", "paper" or "scissors"`);
	} else if (playerSelection === computerSelection) {
		console.log(`Computer chose the "${computerSelection}"\nYou chose the "${playerSelection}"\n\nIT'S A DRAW!`);
	} else if (
		(playerSelection === "rock" && computerSelection === "scissors") || 
		(playerSelection === "paper" && computerSelection === "rock") || 
		(playerSelection === "scissors" && computerSelection === "paper") 
		) {
		console.log(`Computer chose the "${computerSelection}"\nYou chose the "${playerSelection}"\n\nYOU WIN!`);
		return playerScore = ++playerScore;
	}	else {
		console.log(`Computer chose the "${computerSelection}"\nYou chose the "${playerSelection}"\n\nCOMPUTER WIN!`);
		return computerScore = ++computerScore;
	}

}

function playGame() {

	playRound();
	console.log(`Computer : You\n\n${computerScore} : ${playerScore}`);
	
	computerSelection = getComputerChoice();
	playerSelection = getPlayerChoice();
	playRound();
	console.log(`Computer : You\n\n${computerScore} : ${playerScore}`);

	computerSelection = getComputerChoice();
	playerSelection = getPlayerChoice();
	playRound();
	console.log(`Computer : You\n\n${computerScore} : ${playerScore}`);
	
	computerSelection = getComputerChoice();
	playerSelection = getPlayerChoice();
	playRound();
	console.log(`Computer : You\n\n${computerScore} : ${playerScore}`);
	
	computerSelection = getComputerChoice();
	playerSelection = getPlayerChoice();
	playRound();
	console.log(`Computer : You\n\n${computerScore} : ${playerScore}`);

	if (computerScore = playerScore) {
		console.log(`TOTAL SCORE\n\nIT'S A DRAW!\n\nYou can play new game\nReload the page`);
	} else if (computerScore > playerScore) {
		console.log(`TOTAL SCORE\n\nCOMPUTER WIN!\n\nYou can play new game\nReload the page`);
	} else {
		console.log(`TOTAL SCORE\n\nYOU WIN!\n\nYou can play new game\nReload the page`);
	}
	
}

playGame();