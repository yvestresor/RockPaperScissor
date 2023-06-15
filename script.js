function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function play(computerChoice, userChoice){
    if (computerChoice === userChoice){
        return "It's a tire, we both chose " + computerChoice;
    }
    else if ((computerChoice === "rock" && userChoice === "scissors")
     || (computerChoice === "paper" && userChoice === "rock")
     || (computerChoice === "scissor" && userChoice === "paper")){
        return `You lose! ${computerChoice} beats ${userChoice}`;
    }
    else if ((userChoice === "rock" && computerChoice === "scissors")
    || (userChoice === "paper" && computerChoice === "rock")
    || (userChoice === "scissor" && computerChoice === "paper")){
       return `You win! ${userChoice} beats ${computerChoice}`;
   }
}


let userChoice = prompt("Enter a choice either rock, paper or scissors: ").toLowerCase();
let computerChoice = getComputerChoice();

console.log(play(computerChoice,userChoice));