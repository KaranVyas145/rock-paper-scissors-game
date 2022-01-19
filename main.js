const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;

  const rockbtn = document.getElementById("rockbtn");
  const paperbtn = document.getElementById("paperbtn");
  const scissorbtn = document.getElementById("scissorbtn");

  const playerChance = [rockbtn, paperbtn, scissorbtn];

  playerChance.forEach((element) => {
    element.addEventListener("click", function () {
      moves++;
      console.log("Moves left " + 10 - moves);
      const computerChance = computerPlay();
      document.getElementById('computer-choice').innerHTML=computerChance;
      document.getElementById('player-choice').innerHTML=element.innerText;
      document.getElementById('winner').innerHTML=`Moves left ${10-moves}`;
      if(moves===10){
        //   document.getElementById('play-game').style.display="none";
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
};

game();