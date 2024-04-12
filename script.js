let computerChoice = "";
let playerChoice = "";
let computerScore = 0;
let playerScore = 0;

function startGame() {

	const start = document.querySelector("#start");

	start.addEventListener("click", () => {
		getComputerChoice();
		getPlayerChoice();
	});

}

function getComputerChoice() {

	const computerChoiceRandom = Math.random();

	if (computerChoiceRandom < (1/3) ) {
		computerChoice = "rock";
		return computerChoice;
	} else if (computerChoiceRandom > (2/3) ) {
		computerChoice = "scissors";
		return computerChoice;
	} else {
		computerChoice = "paper";
		return computerChoice;
	}

}

function getPlayerChoice() {

	const rock = document.querySelector("#rock");
	const paper = document.querySelector("#paper");
	const scissors = document.querySelector("#scissors");

	rock.addEventListener("click", () => {
		playerChoice = "rock";
		playRound(computerChoice, playerChoice);
	});
	paper.addEventListener("click", () => {
		playerChoice = "paper";
		playRound(computerChoice, playerChoice);
	});
	scissors.addEventListener("click", () => {
		playerChoice = "scissors";
		playRound(computerChoice, playerChoice);
	});

}

function playRound(computerChoice, playerChoice) {

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

startGame();
