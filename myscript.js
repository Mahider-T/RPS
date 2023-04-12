
//function that receives the preference of the user and stores it at variable choice
// playerSelection = ()=> prompt("Enter your choice."); 
let computerScore = 0;
let playerScore = 0;

console.log(" This is a test for player score " + playerScore);

function playerSelection() {

    let choice = prompt("Enter you choice.").toLowerCase();

    if (choice != "rock" && choice != "paper" && choice != "scissor") {
        alert("Wrong entry. Enter \"rock\" , \"paper\" or \"scissor\".")
        return playerSelection();
    }
    return choice;
}

function getComputerChoice(){
    let computerSelection = Math.floor(Math.random()*3);

    if (computerSelection == 0) return "rock";
    else if(computerSelection == 1) return "paper";
    else return "scissor";
}


function playRound(playerChoice, computerChoice) {
    
    if (playerChoice === computerChoice) {
        playerScore++;
        computerScore++;
        return "Draw! ";
       
    }
    else if (playerChoice === "rock" && computerChoice === "scissor" || playerChoice === "scissor" && computerChoice === "paper" || playerChoice === "paper" && computerChoice === "rock") {
        playerScore++;
        return `You win! ${playerChoice} beats ${computerChoice}`;
       
    }

    else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${playerChoice}`;
        
    }
    //console.log("Player is " + player);
    //console.log("Computer is " + computer);

}

function game() {

    let winnerOfFive;
    let player;
    let computer;

    for (let i = 0; i <= 4; i++) {
        player = playerSelection();
        computer = getComputerChoice();
        playRound(player, computer);
        console.log("Player is " + player + " and computer is " + computer);
        //console.log(playRound(player, computer));
        console.log(" " + playerScore + " " + computerScore);
    }

   (playerScore > computerScore)? winnerOfFive = "Player ": winnerOfFive = "Computer";
    console.log ("Computer = " + computerScore);
    console.log (" Player  = " + playerScore);
    alert(`Player = ${playerScore} & Computer = ${computerScore}. ${winnerOfFive} is the winner!`); 
}

game();
//console.log(playRound(playerSelection(), getComputerChoice()));


