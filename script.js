window.onload = beginningAnimation();
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
let noScore = 0;

let buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const title = document.querySelector("#title");
const main = document.querySelector("main");
const endAlrt = document.querySelector("#end-alert");
const endDesc = document.querySelector("#end-desc");
const returnMainBtn = document.querySelector("#retry-btn");
const container = document.querySelector("#results-container");


function beginningAnimation() {
  const cta = document.querySelector("#cta");
  cta.classList.add("drop-down");

  cta.addEventListener("animationend", () => {
    const gameCtn = document.querySelector("#game-container");

    setTimeout(function () {
      gameCtn.classList.add("fade-in");
    }, 300);
  });
}


buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const img = button.querySelector("img");
    playerSelection = img.alt.toLowerCase();

    playRound(playerSelection, computerSelection);

    if (playerScore === 5 || computerScore === 5) {
      declareWinner();
    }
  });
});

const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}
let color;
function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay().toLowerCase();
  playerSelection = playerSelection.toLowerCase();
  if (computerSelection == playerSelection) {
    color = "blue";
    noScore +=1;
    keepNoScore();
    displayResults("Tie game!");
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    color = "red";
    computerScore += 1;
    keepCpuScore();
    if (computerScore === 1) {
      displayResults(
        `Oh no! You lost.
        ${capitalize(computerSelection)} beats ${playerSelection}.`
      );
    } else if (computerScore === 2) {
      displayResults(
        `Arghh. ${capitalize(
          computerSelection
        )} beats ${playerSelection}. Give it another shot!`
      );
    } else if (computerScore === 3) {
      displayResults(
        `${capitalize(
          computerSelection
        )} beats ${playerSelection}. It's ok. You got this!!`
      );
    } else if (computerScore === 4) {
      displayResults(
        `Oh no. It's match point!! ${capitalize(
          computerSelection
        )} beats ${playerSelection}. Don't let us down!`
      );
    } else {
      displayResults(`${computerSelection} beats ${playerSelection}`);
    }
  } else {
    color = "green";
    playerScore += 1;
    keepPlayerScore();
    if (playerScore === 1) {
      displayResults(
        `Lets go!!! You won.
        ${capitalize(playerSelection)} beats ${computerSelection}.`
      );
    } else if (playerScore === 2) {
      displayResults(
        `You're pretty good at this. ${capitalize(
          playerSelection
        )} beats ${computerSelection}.`
      );
    } else if (playerScore === 3) {
      displayResults(
        `${capitalize(
          playerSelection
        )} beats ${computerSelection}! Has mankind found its savior??`
      );
    } else if (playerScore === 4) {
      displayResults(
        `${capitalize(
          playerSelection
        )} beats ${computerSelection}. One more and you're a hero!`
      );
    } else {
      displayResults(`${playerSelection} beats ${computerSelection}`);
    }
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function displayResults(str) {
  container.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 300,
    fill: "forwards",
    iterations: 1,
    delay: 0,
    easing: "ease-out",
  });
  container.style.color = color;
  container.textContent = str;
}

function declareWinner() {
  rplContent();
  if (playerScore > computerScore) {
    endDesc.textContent = "You win! Mankind lives another day!!";
    returnMainBtn.innerText = "Play Again";
  } else {
    endDesc.textContent = "You lost...who will save mankind now?";
    returnMainBtn.innerText = "Try Again?";
  }
  returnMainBtn.classList.add("fade-in");
}

function rplContent() {
  main.classList.add("disappear");
  endAlrt.classList.remove("disappear");
  endDesc.classList.add("animate");

  returnMainBtn.addEventListener("click", () => {
    main.classList.remove("disappear");
    endAlrt.classList.add("disappear");
    returnMainBtn.classList.remove("fade-in");
    resetGame();
  });
}

function resetGame() {
  container.textContent = "";
  playerScore = 0;
  noScore = 0;
  computerScore = 0;
  keepPlayerScore();
  keepNoScore();
  keepCpuScore();
}

function keepPlayerScore() {
  let playerScoreBox = document.querySelector("#player-score");

  playerScoreBox.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 300,
    fill: "forwards",
    iterations: 1,
    delay: 0,
    easing: "ease-out",
  });

  playerScoreBox.textContent = playerScore;
}
function keepCpuScore() {
  let computerScoreBox = document.querySelector("#computer-score");

  computerScoreBox.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 300,
    fill: "forwards",
    iterations: 1,
    delay: 0,
    easing: "ease-out",
  });

  computerScoreBox.textContent = computerScore;
}
function keepNoScore() {
  let noScoreBox = document.querySelector("#no-score");

  noScoreBox.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 300,
    fill: "forwards",
    iterations: 1,
    delay: 0,
    easing: "ease-out",
  });

  noScoreBox.textContent = noScore;
}