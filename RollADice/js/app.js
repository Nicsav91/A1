

// BUTTONS
let button0 = document.getElementById("button0");


// TEXTS
let playerRollText = document.getElementById("playerRollText");
let computerRollText = document.getElementById("computerRollText");
let evaluationRollText = document.getElementById("evaluationRollText");
let playerScoreNumber = document.getElementById("playerScoreNumber");
let computerScoreNumber = document.getElementById("computerScoreNumber");
let playerHistory = document.getElementById("playerHistory");
let computerHistory = document.getElementById("computerHistory");



// ARRAYS
let playerScoreHistory = [];
let computerScoreHistory = [];

// DATA
let playerRoll = 0;
let computerRoll = 0;
let playerScore = 0;
let computerScore = 0;

loadGame();
showScoreResult();
// PROCESSES push the button
button0.addEventListener("click", function() {
  getRandomIntForPlayer();
  showPlayerRollResult();
  getRandomIntForComputer();
  showComputerRollResult();
  evaluationResultBool();
  showScoreResult();
  scoreHistory();
  saveGame();
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
  playerHistory.innerHTML = "Player History: " + playerScoreHistory;
  computerHistory.innerHTML = "Computer History: " + computerScoreHistory;
}

// COOKIES
function saveGame() {
  // Game saved into 2 cookies
  document.cookie = "playerScore=" + playerScore+ ";expires=Thu, 18 Dec 2025 12:00:00 UTC";
  document.cookie = "computerScore=" + computerScore + ";expires=Thu, 18 Dec 2025 12:00:00 UTC";
}

// Cookie loading
function loadGame() {
  // Game loaded from 2 cookies
  playerScore = getCookie("playerScore");
  computerScore = getCookie("computerScore");
  scoreHistory();
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return 0;
}
