var gamePieces;
var userChoice;
var computerChoice;

function getRandomGamePiece(gamePiecesLength){
  var rnd = Math.floor((Math.random() * gamePiecesLength) + 0);
  return rnd;
};

function startGame(){
  userChoice = prompt("ROCK, PAPER, SCISSORS, DYNAMITE?").toUpperCase();

  gamePieces = ["ROCK", "PAPER", "SCISSORS", "DYNAMITE"];
  computerChoice= gamePieces[getRandomGamePiece(gamePieces.length)];
  whoWins();
}

function whoWins(){
  var results = "";
  if (userChoice==computerChoice){
    results = "it's a tie"
  }
  if (userChoice=="ROCK" && computerChoice=="PAPER"){
    results="PAPER wins"
  }
  if (userChoice=="ROCK" && computerChoice=="DYNAMITE"){
    results="DYNAMITE wins"
  }
  if (userChoice=="ROCK" && computerChoice=="SCISSORS"){
    results="ROCK wins"
  }
  if (userChoice=="PAPER" && computerChoice=="DYNAMITE"){
    results="DYNAMITE wins"
  }
  if (userChoice=="PAPER" && computerChoice=="SCISSORS"){
    results="SCISSORS wins"
  }
  if (userChoice=="SCISSORS" && computerChoice=="DYNAMITE"){
    results="SCISSORS wins"
  }
  // reverse
  if (userChoice=="PAPER" && computerChoice=="ROCK"){
    results="DYNAMITE wins"
  }
  if (userChoice=="DYNAMITE" && computerChoice=="ROCK"){
    results="DYNAMITE wins"
  }
  if (userChoice=="SCISSORS" && computerChoice=="ROCK"){
    results="ROCK wins"
  }
  if (userChoice=="DYNAMITE" && computerChoice=="ROCK"){
    results="DYNAMITE wins"
  }
  if (userChoice=="SCISSORS" && computerChoice=="PAPER"){
    results="SCISSORS wins"
  }
  if (userChoice=="DYNAMITE" && computerChoice=="SCISSORS"){
    results="SCISSORS wins"
  }
  $(document).ready(function(){
    $("#results").text(results);
  });
}
