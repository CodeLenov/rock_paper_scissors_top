let computerChoice = "";
let playerChoice = "";
let score = document.querySelector("#score");
let computerScore = 0;
let playerScore = 0;

function startGame() {

	const start = document.querySelector("#start");

	/*Computer need FIRST received player choice from buttons ("rock", "paper", "scissors")
	THEN invoke logics from playRound (or playGame).
	Else it invoke logics from playRound (or playGame) WITHOUT playerChoice VALUE (undefined).
	SO we invoke playRound or playGame AFTER get playerChoice (in getPlayerChoice() )*/ 

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

	/*Computer need FIRST received player choice from buttons ("rock", "paper", "scissors")
	THEN invoke logics from playRound (or playGame).
	Else it invoke logics from playRound (or playGame) WITHOUT playerChoice VALUE (undefined).
	SO we invoke playRound or playGame AFTER get playerChoice (in getPlayerChoice() )*/ 

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

	if (computerChoice === playerChoice) {
		score.innerHTML = `
			<p>Computer chose the "${computerChoice}"</br>
			You chose the "${playerChoice}"</br></br>
			IT'S A DRAW!</p>
		`;
	} else if (
		(computerChoice === "rock" && playerChoice === "paper") || 
		(computerChoice === "paper" && playerChoice === "scissors") || 
		(computerChoice === "scissors" && playerChoice === "rock") 
		) {
		score.innerHTML = `
			<p>Computer chose the "${computerChoice}"</br>
			You chose the "${playerChoice}"</br></br>
			YOU WIN!</p>
		`;
		playerScore = ++playerScore;
	}	else {
		score.innerHTML = `
			<p>Computer chose the "${computerChoice}"</br>
			You chose the "${playerChoice}"</br></br>
			COMPUTER WIN!</p>
		`;
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
