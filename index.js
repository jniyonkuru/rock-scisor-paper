// Initialize global variables;

let playerMarks = 0;
let computerMarks = 0;
let tieGames = 0;
const Rock = "rock";
const Paper = "paper";
const Scissor = "scissor";
const container=document.querySelector(".container");
const buttons = document.querySelectorAll(".button");
const displayBoard = document.querySelector(".display");
const computerScore = document.createElement("h1");
const playerScore = document.createElement("h1");
const totalTies = document.createElement("h1");
const message = document.querySelector(".message");
const heading = document.querySelector("#hd");
const startBtn=document.querySelector('#start');
const clickSound=document.querySelector('#buttonclick');
const sadSound=document.querySelector('#sadaudio');
const cheerSound=document.querySelector('#cheeraudio');
computerScore.textContent = `Computer:${computerMarks}`;
playerScore.textContent = `Player:${playerMarks}`;
totalTies.textContent = `TiesGames:${tieGames}`;
displayBoard.appendChild(computerScore);
displayBoard.appendChild(playerScore);
displayBoard.appendChild(totalTies);
buttons.forEach((btn) => btn.addEventListener("click", playRound));
let text = "Rock-Paper-Scissor?";
let speed = 200;
let i = 0;

/*
A FUNCTION THAT GENERATE A COMPUTER RANDOM CHOICE
 
*/
console.log(heading);
typeWriter();
function typeWriter() {
  if (i < text.length) {
    heading.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
startBtn.addEventListener('click',()=>{
  clickSound.play();
container.classList.remove('hide');
startBtn.classList.add('hide');
  
})
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
  switch (choice) {
    case 1:
      return Rock;
      break;
    case 2:
      return Scissor;
      break;
    case 3:
      return Paper;
      break;
  }
}

/* PLAY  ONE ROUND*/

function playRound(e) {
  clickSound.play();
  if (computerMarks + playerMarks + tieGames == 5) {
    if (playerMarks > computerMarks) {
      displayBoard.classList.add("hide");
      heading.classList.add('hide');
      message.innerHTML = "<p> Congratulations! you won !!!</p>";
      cheerSound.play();
    } else if (computerMarks > playerMarks) {
      displayBoard.classList.add("hide");
      heading.classList.add('hide');
      message.innerHTML = "<p>!!! you lost</p>";
      sadSound.play();
    } else {
      heading.classList.add('hide');
      displayBoard.classList.add("hide");
      message.innerHTML = "<p>It is a Tie game</p>";
    }
    computerMarks = 0;
    playerMarks = 0;
    tieGames = 0;
    buttons.forEach((btn) => btn.removeEventListener("click", playRound));
    return;
  }
  const computerSelection = getComputerChoice();
  const playerSelection = e.target.id;

  if (
    (computerSelection == Rock && playerSelection == Scissor) ||
    (computerSelection == Scissor && playerSelection == Paper) ||
    (computerSelection == Paper && playerSelection == Rock)
  ) {
    computerMarks++;
  } else if (
    (playerSelection == Rock && computerSelection == Scissor) ||
    (playerSelection == Scissor && computerSelection == Paper) ||
    (playerSelection == Paper && computerSelection == Rock)
  ) {
    playerMarks++;
  } else if (computerSelection === playerSelection) {
    tieGames++;
  }
  computerScore.textContent = `Computer:  ${computerMarks}`;
  playerScore.textContent = `Player:  ${playerMarks}`;
  totalTies.textContent = `TiesGames:  ${tieGames}`;
}
