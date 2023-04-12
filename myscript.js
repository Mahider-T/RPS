
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


function winner(player, computer) {
    let display;
    if (player === computer) {
        display = "Draw! ";
        playerScore++;
        computerScore++;
    }
    else if (player === "rock" && computer === "scissor" || player === "scissor" && computer === "paper" || player === "paper" && computer === "rock") {
        playerScore++;
        display = `You won! ${player} beats ${computer}`;
       
    }

    else {
        computerScore++;
        display = `You lost! ${computer} beats ${player}`;
        
    }



    
    //console.log("Player is " + player);
    //console.log("Computer is " + computer);
    return display;

}
function playRound(p, c) {
    return winner(p, c); 
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
        console.log(winner(player, computer));
        console.log (" Player = " + playerScore);
        console.log (" Computer = " + computerScore);
    }

   (playerScore > computerScore)? winnerOfFive = "Player ": winnerOfFive = "Computer";
    console.log ("Computer = " + computerScore);
    console.log (" Player: = " + playerScore);
    alert(winnerOfFive + " is the winner!"); 
}

game();
//console.log(playRound(playerSelection(), getComputerChoice()));


playerScore