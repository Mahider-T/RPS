
//function that receives the preference of the user and stores it at variable choice
// playerSelection = ()=> prompt("Enter your choice."); 

function playerSelection() {

    let choice = prompt("Enter you choice.");
    while(choice != "rock" && choice != "paper" && choice != "scissor"){
        alert("Wrong entry");
        playerSelection();
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
    if (player === computer)
        display = "Draw! ";
    else if (player === "rock" && computer === "scissor" || player === "scissor" && computer === "paper" || player === "paper" && computer === "rock")
        display = `You won! ${player} beats ${computer}`;
    else
        display = `You lost! ${computer} beats ${player}`;

    
    console.log("Player is " + player);
    console.log("Computer is " + computer);
    return display;

}
function playRound(p, c) {
    return winner(p, c); 
}


console.log(playRound(playerSelection(), getComputerChoice()));


