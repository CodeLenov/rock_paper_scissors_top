let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();
let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {

	const computerChoiceRandom = Math.random();

	if (computerChoiceRandom < ( 1 / 3) ) {
		return "rock";
	} else if (computerChoiceRandom > ( 2 / 3) ) {
		return "scissors";
	} else {
		return "paper";
	}

}

function getPlayerChoice() {

	const rock = document.querySelector("#rock");
	const paper = document.querySelector("#paper");
	const scissors = document.querySelector("#scissors");

	rock.addEventListener("click", () => {
		playRound();
		return "rock";
	});
	paper.addEventListener("click", () => {
		playRound();
		return "paper";
	});
	scissors.addEventListener("click", () => {
		playRound();
		return "scissors";
	});

}

function playRound() {

	if (playerChoice === computerChoice) {
		console.log(`Computer chose the "${computerChoice}"\nYou chose the "${playerChoice}"\n\nIT'S A DRAW!`);
	} else if (
		(playerChoice === "rock" && computerChoice === "scissors") || 
		(playerChoice === "paper" && computerChoice === "rock") || 
		(playerChoice === "scissors" && computerChoice === "paper") 
		) {
		console.log(`Computer chose the "${computerChoice}"\nYou chose the "${playerChoice}"\n\nYOU WIN!`);
		playerScore = ++playerScore;
	}	else {
		console.log(`Computer chose the "${computerChoice}"\nYou chose the "${playerChoice}"\n\nCOMPUTER WIN!`);
		computerScore = ++computerScore;
	}

}

function playGame() {

	playRound();
	console.log(`Computer : You\n\n${computerScore} : ${playerScore}`);
	
	computerChoice = getComputerChoice();
	playerChoice = getPlayerChoice();
	playRound();
	console.log(`Computer : You\n\n${computerScore} : ${playerScore}`);

	computerChoice = getComputerChoice();
	playerChoice = getPlayerChoice();
	playRound();
	console.log(`Computer : You\n\n${computerScore} : ${playerScore}`);
	
	computerChoice = getComputerChoice();
	playerChoice = getPlayerChoice();
	playRound();
	console.log(`Computer : You\n\n${computerScore} : ${playerScore}`);
	
	computerChoice = getComputerChoice();
	playerChoice = getPlayerChoice();
	playRound();
	console.log(`Computer : You\n\n${computerScore} : ${playerScore}`);

	if (computerScore === playerScore) {
		console.log(`TOTAL SCORE\n\nIT'S A DRAW!\n\nYou can play new game\nReload the page`);
	} else if (computerScore > playerScore) {
		console.log(`TOTAL SCORE\n\nCOMPUTER WIN!\n\nYou can play new game\nReload the page`);
	} else {
		console.log(`TOTAL SCORE\n\nYOU WIN!\n\nYou can play new game\nReload the page`);
	}
	
}
