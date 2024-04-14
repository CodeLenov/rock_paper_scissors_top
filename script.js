let computerChoice = "";
let playerChoice = "";
let round = 0;
let score = document.querySelector("#score");
let computerScore = 0;
let playerScore = 0;

startGame();

function startGame() {

	const start = document.querySelector("#start");

	/*Computer need FIRST received player choice from buttons ("rock", "paper", "scissors")
	THEN invoke logics from playRound (or playGame).
	Else it invoke logics from playRound (or playGame) WITHOUT playerChoice VALUE (undefined).
	SO we invoke playRound or playGame AFTER get playerChoice (in getPlayerChoice() )*/ 

	start.addEventListener("click", () => {
		round = 0;
		score.innerHTML = ``;
		getPlayerChoice();
	}, {once:true});

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
		playGame();
	});
	paper.addEventListener("click", () => {
		playerChoice = "paper";
		playGame();
	});
	scissors.addEventListener("click", () => {
		playerChoice = "scissors";
		playGame();
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

function playGame() {

	++round;

	if (round < 5) {
		playRound(playerChoice, computerChoice);
	} else if (round === 5) {
		playRound(playerChoice, computerChoice);
		printTotalScore();
	} else {
		score.innerHTML += `
			<p><em>You can play a new game | Press START</em></p><hr/>
		`;
	}

}

function playRound(playerChoice, computerChoice) {

	if (playerChoice === computerChoice) {
		//playerScore and computerScore are the same, they don"t change
		score.innerHTML += `
			<p>IT'S A DRAW! | You chose the "${playerChoice}" : Computer chose the "${computerChoice}"<br/>
			${playerScore} : ${computerScore} | You : Computer</p><hr/>
		`;
	} else if (
		(playerChoice === "rock" && computerChoice === "scissors") || 
		(playerChoice === "paper" && computerChoice === "rock") || 
		(playerChoice === "scissors" && computerChoice === "paper") 
		) {
		playerScore = ++playerScore; //only playerScore change, computerScore is the same
		score.innerHTML += `
			<p>YOU WIN! | You chose the "${playerChoice}" : Computer chose the "${computerChoice}"<br/>
			${playerScore} : ${computerScore} | You : Computer</p><hr/>
		`;
	} else {
		computerScore = ++computerScore; //only computerScore change, playerScore is the same
		score.innerHTML += `
			<p>COMPUTER WIN! | You chose the "${playerChoice}" : Computer chose the "${computerChoice}"<br/>
			${playerScore} : ${computerScore} | You : Computer</p><hr/>
		`;
	}

	computerChoice = getComputerChoice();

}

function printTotalScore() {

	if (computerScore === playerScore) {
		score.innerHTML += `
			<p><strong>IT'S A DRAW! | TOTAL SCORE | ${playerScore} : ${computerScore} | You : Computer</strong></p><hr/>
			<p><em>You can play a new game | Press START</em></p><hr/>
		`;
	} else if (playerScore > computerScore) {
		score.innerHTML += `
			<p><strong>YOU WIN! | TOTAL SCORE | ${playerScore} : ${computerScore} | You : Computer</strong></p><hr/>
			<p><em>You can play a new game | Press START</em></p><hr/>
		`;
	} else {
		score.innerHTML += `
			<p><strong>COMPUTER WIN! | TOTAL SCORE | ${playerScore} : ${computerScore} | You : Computer</strong</p><hr/>
			<p><em>You can play a new game | Press START</em></p><hr/>
		`;
	}

}
