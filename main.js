const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;

  const rockbtn = document.getElementById("rockbtn");
  const paperbtn = document.getElementById("paperbtn");
  const scissorbtn = document.getElementById("scissorbtn");

  const playerChanceAll = [rockbtn, paperbtn, scissorbtn];

  playerChanceAll.forEach((element) => {
    element.addEventListener("click", function () {
      moves++;
    //   console.log("Moves left "+(10-moves));
      const computerChance = computerPlay();
      document.getElementById('computer-choice').innerHTML=computerChance;
      document.getElementById('player-choice').innerHTML=element.innerText;
      document.getElementById('moves').innerHTML=`Moves left ${10-moves}`;
      const gameWinner=winner(element.innerText,computerChance);
    //   console.log(gameWinner);
      if(moves===10){
          document.getElementById('play-game').style.display="none";
          document.getElementById('moves').style.display="none";
        //   document.getElementById('winner').style.display="none"
          gameOver(gameWinner);
        //Game over
      }
    });
  });

  function computerPlay() {
    let play = Math.floor(Math.random() * (4 - 1)) + 1;
    switch (play) {
      case 1:
        return "ROCK";
      case 2:
        return "SCISSORS";
      case 3:
        return "PAPER";
    }
  }

  function winner(playerChance,computerChance){
    // console.log(playerChance);
    // console.log(computerChance);
    if(computerChance===playerChance){
        document.getElementById('winner').innerHTML="Its a tie!!!";
    }
    else if(computerChance==="ROCK"){
        if(playerChance==="SCISSORS"){
            document.getElementById('winner').innerHTML="Computer Won";
            computerScore++;
            document.getElementById('computer-score').innerHTML=computerScore;
        }
        else{
            // console.log("player won");
            playerScore++;
            document.getElementById('player-score').innerHTML=playerScore;
            document.getElementById('winner').innerHTML="You Won";
        }
    }
    else if(computerChance==="SCISSORS"){
        if(playerChance==="PAPER"){
            document.getElementById('winner').innerHTML="Computer Won";
            computerScore++;
            document.getElementById('computer-score').innerHTML=computerScore;
        }
        else{
            // console.log("player won");
            playerScore++;
            document.getElementById('player-score').innerHTML=playerScore;
            document.getElementById('winner').innerHTML="You Won";
        }
    }
    else if(computerChance==="PAPER"){
        if(playerChance==="ROCK"){
            document.getElementById('winner').innerHTML="Computer Won";
            computerScore++;
            document.getElementById('computer-score').innerHTML=computerScore;
        }
        else{
            // console.log("player won");
            playerScore++;
            document.getElementById('player-score').innerHTML=playerScore;
            document.getElementById('winner').innerHTML="You Won";
        }
    }

    return playerScore>computerScore? "YOU" : "Computer";
  }

  function gameOver(winner){
      document.getElementById('winner').innerHTML=`${winner} won this game <br> <button id="restart">Restart Game</button>`;
      document.getElementById('winner').classList='game-over';

      const restart=document.getElementById('restart');
      restart.addEventListener('click',()=>{
        window.location.reload();
      })
  }
};

game();