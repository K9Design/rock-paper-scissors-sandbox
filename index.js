const getRandomMove = () => {
  const moves = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
};

const getOutcome = (moveOne, moveTwo) => {
  if (moveOne === moveTwo) {
    return "It's a draw!";
  }

  if (
    (moveOne === "scissors" && moveTwo === "paper") ||
    (moveOne === "rock" && moveTwo === "scissors") ||
    (moveOne === "paper" && moveTwo === "rock")
  ) {
    return "Player One wins!";
  }

  return "Player Two wins!";
};

// Removing elements (nodes) from the DOM
const resetGame = () => {
  if (document.getElementById("outcome")) {
    const outcome = document.body.lastChild;
    document.body.removeChild(outcome);
  }
};

const playGame = () => {
  resetGame();
  const playerOneMove = getRandomMove();
  const playerTwoMove = getRandomMove();
  const outcome = getOutcome(playerOneMove, playerTwoMove);
  updateDOM(playerOneMove, playerTwoMove, outcome);
};

const updateDOM = (moveOne, moveTwo, outcome) => {
  document.getElementById("player-one-move__img").src = "images/" + moveOne + ".png";
  document.getElementById("player-two-move__img").src = "images/" + moveTwo + ".png";
  var para = document.createElement("H1");
  para.className += "resultsHeader";
  var text = document.createTextNode(outcome);
  para.appendChild(text);
  const header = document.getElementsByClassName("resultsHeader")[0];
  console.log(header);
  if(header != undefined){
    header.remove();
  }
  document.getElementsByClassName("winDiv")[0].append(para);
};

const playButton = document.getElementById("play-btn");
playButton.addEventListener("click", playGame);
