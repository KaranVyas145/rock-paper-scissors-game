const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;
  // Acessing the main buttons
  const rockbtn = document.getElementById("rockbtn");
  const paperbtn = document.getElementById("paperbtn");
  const scissorbtn = document.getElementById("scissorbtn");

  const playerChanceAll = [rockbtn, paperbtn, scissorbtn];
  // iterating through each button
  playerChanceAll.forEach((element) => {
    element.addEventListener("click", function () {
      moves++;
      const computerChance = computerPlay();
      const playerChance = element.innerText;
      document.getElementById("computer-choice").innerHTML =
        icons(computerChance);
      document.getElementById("player-choice").innerHTML = icons(playerChance);
      document.getElementById("moves").innerHTML = `Moves left ${10 - moves}`;
      const gameWinner = winner(element.innerText, computerChance);
      if (moves === 10) {
        document.getElementById("play-game").style.visibility = "hidden";
        document.getElementById("moves").style.display = "none";
        gameOver(gameWinner);
      }
    });
  });

  // Returning icons for their respective values
  function icons(chance) {
    switch (chance) {
      case "ROCK":
        return `<i class="fas fa-hand-rock"></i>`;
      case "SCISSORS":
        return `<i class="fas fa-hand-scissors"></i>`;
      case "PAPER":
        return `<i class="fas fa-hand-paper"></i>`;
    }
  }

  //  Returns chance made by the computer using the random function
  function computerPlay() {
    let play = Math.floor(Math.random() * (4 - 1)) + 1;
    switch (play) {
      case 1:
        return `ROCK`;
      case 2:
        return `PAPER`;
      case 3:
        return `SCISSORS`;
    }
  }

  // Declaring the winner for each move and updating the scores
  function winner(playerChance, computerChance) {
    if (computerChance === playerChance) {
      document.getElementById("winner").innerHTML = "Its a tie!!!";
    } else if (computerChance === "ROCK") {
      if (playerChance === "SCISSORS") {
        document.getElementById("winner").innerHTML = "Computer Won";
        computerScore++;
        document.getElementById("computer-score").innerHTML = computerScore;
      } else {
        playerScore++;
        document.getElementById("player-score").innerHTML = playerScore;
        document.getElementById("winner").innerHTML = "You Won";
      }
    } else if (computerChance === "SCISSORS") {
      if (playerChance === "PAPER") {
        document.getElementById("winner").innerHTML = "Computer Won";
        computerScore++;
        document.getElementById("computer-score").innerHTML = computerScore;
      } else {
        playerScore++;
        document.getElementById("player-score").innerHTML = playerScore;
        document.getElementById("winner").innerHTML = "You Won";
      }
    } else if (computerChance === "PAPER") {
      if (playerChance === "ROCK") {
        document.getElementById("winner").innerHTML = "Computer Won";
        computerScore++;
        document.getElementById("computer-score").innerHTML = computerScore;
      } else {
        playerScore++;
        document.getElementById("player-score").innerHTML = playerScore;
        document.getElementById("winner").innerHTML = "You Won";
      }
    }

    if (playerScore === computerScore) {
      return "Nobody";
    } else if (playerScore > computerScore) {
      return "You";
    } else {
      return "Computer";
    }
  }

  // Display the game over message
  function gameOver(winner) {
    document.getElementById(
      "winner"
    ).innerHTML = `${winner} won this game <br> <button id="restart">Restart Game</button>`;
    document.getElementById("winner").classList = "game-over winning-animation";

    const restart = document.getElementById("restart");
    restart.addEventListener("click", () => {
      window.location.reload();
    });
  }
};

// calling the game function to run the main code 
game();
