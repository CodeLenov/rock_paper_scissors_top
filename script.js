let computerChoice = "";
let playerChoice = "";
let round = 0;
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

	getComputerChoice();

	/*Computer need FIRST received player choice from buttons ("rock", "paper", "scissors")
	THEN invoke logics from playRound (or playGame).
	Else it invoke logics from playRound (or playGame) WITHOUT playerChoice VALUE (undefined).
	SO we invoke playRound or playGame AFTER get playerChoice (in getPlayerChoice() )*/ 

	rock.addEventListener("click", () => {
		playerChoice = "rock";
		round++;
		playGame();
	});
	paper.addEventListener("click", () => {
		playerChoice = "paper";
		round++;
		playGame();
	});
	scissors.addEventListener("click", () => {
		playerChoice = "scissors";
		round++;
		playGame();
	});

}

function playRound(computerChoice, playerChoice) {

	if (computerChoice === playerChoice) {
		//computerScore and playerScore are the same, they don"t change
		score.innerHTML += `
			<p>IT'S A DRAW! | Computer chose the "${computerChoice}" : You chose the "${playerChoice}"<br/>
			${computerScore} : ${playerScore} | Computer : You</p><hr/>
		`;
	} else if (
		(computerChoice === "rock" && playerChoice === "paper") || 
		(computerChoice === "paper" && playerChoice === "scissors") || 
		(computerChoice === "scissors" && playerChoice === "rock") 
		) {
		playerScore = playerScore++; //only playerScore change, computerScore is the same
		score.innerHTML += `
			<p>YOU WIN! | Computer chose the "${computerChoice}" : You chose the "${playerChoice}"<br/>
			${computerScore} : ${playerScore} | Computer : You</p><hr/>
		`;
	}	else {
		computerScore = computerScore++; //only computerScore change, playerScore is the same
		score.innerHTML += `
			<p>COMPUTER WIN! | Computer chose the "${computerChoice}" : You chose the "${playerChoice}"<br/>
			${computerScore} : ${playerScore} | Computer : You</p><hr/>
		`;
	}

	computerChoice = getComputerChoice();

}

function playGame() {

	if (round < 5) {
		playRound(computerChoice, playerChoice);
	} else if (round = 5) {
		playRound(computerChoice, playerChoice);
		if (computerScore === playerScore) {
			score.innerHTML += `
				<p>TOTAL SCORE<br/>
				IT'S A DRAW! | ${computerScore} : ${playerScore} | Computer : You</p><hr/>
			`;
		} else if (computerScore > playerScore) {
			score.innerHTML += `
				<p>TOTAL SCORE<br/>
				COMPUTER WIN! | ${computerScore} : ${playerScore} | Computer : You</p><hr/>
			`;
		} else {
			score.innerHTML += `
				<p>TOTAL SCORE<br/>
				YOU WIN! | ${computerScore} : ${playerScore} | Computer : You</p><hr/>
			`;
		}
	} else {
			score.innerHTML += `
				<p>You can play new game<br/>
				Press START<br/></p><hr/>
			`;
	}

	/*computerChoice = getComputerChoice();
	playerChoice = getPlayerChoice();
	

	if (computerScore === playerScore) {
		score.innerHTML += `
			<p>TOTAL SCORE<br/>
			IT'S A DRAW!<br/><br/>You can play new game<br/>
			Reload the page</p>
		`;
	} else if (computerScore > playerScore) {
		score.innerHTML += `
			<p>TOTAL SCORE<br/><br/>
			COMPUTER WIN!<br/><br/>
			You can play new game<br/>
			Reload the page</p>
		`;
	} else {
		score.innerHTML += `
			<p>TOTAL SCORE<br/><br/>
			YOU WIN!<br/><br/>
			You can play new game<br/>
			Reload the page<br/></p>
		`;
	}*/
	
}

startGame();
