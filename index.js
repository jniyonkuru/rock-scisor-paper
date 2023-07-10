// Initialize global variables;

let playerMarks = 0;
let computerMarks = 0;
let tieGames=0;
const Rock="rock";
const Paper="paper";
const Scissor ="scissor";

/*
A FUNCTION THAT GENERATE A COMPUTER RANDOM CHOICE
 
*/

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
/* A FUNCTION THAT GET THE USER'S CHOICE */

function getPlayerChoice() {
  const playerSelection = prompt("enter your choice");
  if(playerSelection.trim().toLowerCase() === Rock || Scissor || Paper ){
    return playerSelection;
  }else{
    return "invalid input";
  }
  // const output =
  //   playerSelection.trim().toLowerCase() === Rock || Scissor || Paper ? playerSelection :'';
  // return output;
}

