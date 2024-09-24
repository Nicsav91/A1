// VARIABLES


// BUTTONS
let button0 = document.getElementById("button0");


// TEXTS
let playerRollText = document.getElementById("playerRollText");
let computerRollText = document.getElementById("computerRollText");
let evaluationRollText = document.getElementById("evaluationRollText");
let playerScoreNumber = document.getElementById("playerScoreNumber");
let computerScoreNumber = document.getElementById("computerScoreNumber");
let playerScoreText = document.getElementById("playerScoreText");
let computerScoreText = document.getElementById("computerScoreText");
let playerHistory = document.getElementById("playerHistory");
let computerHistory = document.getElementById("computerHistory");



// ARRAYS
const playerScoreHistory = [0];
const computerScoreHistory = [0];

// DATA
let playerRoll = 0;
let computerRoll = 0;
let evaluationResult = 0;
let playerScore = 0;
let computerScore = 0;


// PROCESSES push the button
button0.addEventListener("click", function() {
  getRandomIntForPlayer();
  showPlayerRollResult();
  getRandomIntForComputer();
  showComputerRollResult();
  evaluationResultBool();
  showScoreResult();
  scoreHistory();
})

// CONTROLLERS functions. +1 för att få bort nollan
function getRandomIntForPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1;
}

function getRandomIntForComputer() {
  computerRoll = Math.floor(Math.random() * 6) + 1;
}

function evaluationResultBool () {
  if (playerRoll > computerRoll) {
    playerScore++;
    playerScoreHistory.push(1);
    computerScoreHistory.push(0);
    showEvaluationResult("You win!");
  }
  if (playerRoll < computerRoll) {
    computerScore++;
    playerScoreHistory.push(0);
    computerScoreHistory.push(1);
    showEvaluationResult("You lose!");
  }
  if (playerRoll === computerRoll) {
    playerScoreHistory.push(0);
    computerScoreHistory.push(0);
  showComputerRollResult("It´s a draw!");
  }
}



// VIEWS
function showPlayerRollResult() {
  playerRollText.innerHTML = playerRoll;
}

function showComputerRollResult() {
  computerRollText.innerHTML = computerRoll;
}

function showEvaluationResult(text) {
  evaluationRollText.innerHTML = text;
}

function showScoreResult () {
  playerScoreNumber.innerHTML = playerScore;
  computerScoreNumber.innerHTML = computerScore;
}

function scoreHistory() {
  playerHistory.innerHTML = playerScoreHistory;
  computerHistory.innerHTML = computerScoreHistory;
}
