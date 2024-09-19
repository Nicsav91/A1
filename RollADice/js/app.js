// VARIABLES


// BUTTONS
let button0 = document.getElementById("button0");


// TEXTS
let playerRollText = document.getElementById("playerRollText");

// DATA
let playerRoll = 0;


// PROCESSES push the button
button0.addEventListener("click", function() {
  getRandomIntForPlayer();
  showPlayerRollResult();
})

// CONTROLLERS functions. +1 för att få bort nollan
function getRandomIntForPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1;
}

// VIEWS
function showPlayerRollResult() {
  playerRollText.innerHTML = playerRoll
}
