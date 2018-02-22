var gamePieces = ["rock", "paper", "scissors", "dynamite"];
var results = {"rockpaper": "paper wins", "rockdynamite":"dynamite wins","rockscissors":"rock wins", "paperdynamite":"dynamite wins", "paperscissors":"scissors wins","scissorsdynamite":"scissors wins"};

 function startGame(){
  var userChoice = prompt(gamePieces + "?").toLowerCase();

  var compare = function(user,computer){
    if (user==computer){
      return "It's a tie!"
    }
    if (results[user + "" + computer] !==undefined){
      userWins++;
      return user+""+results[computer+""+user]+""+computer;
    } else {
      computerWins++
      return computer+""+results[computer+""+user]+""+user;
    }
  }

  do {
    var bored=true;
    for (var i=0;i<gamePieces.length;i++){
    if (userChoice === gamePieces[i]){
      bored=false;
      var computerChoice = gamePieces[Math.floor(Math.random()* gamePieces.length)];
      alert (userChoice + " : " + computerChoice);
    }
    }
  } while (!bored);
  console.log


  function getRandomGamePiece(gamePiecesLength){
    var rnd = Math.floor((Math.random() * gamePiecesLength) + 0);
    return rnd;
  };

  function whoWins(){

  };
}
