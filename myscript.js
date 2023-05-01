
//function that receives the preference of the user and stores it at variable choice
// playerSelection = ()=> prompt("Enter your choice."); 
let computerScore = 0;
let playerScore = 0;

//console.log(" This is a test for player score " + playerScore);

let computerChoice;
function getComputerChoice(){
    let computerSelection = Math.floor(Math.random()*3);
    

    if (computerSelection == 0) computerChoice = "rock";
    else if(computerSelection == 1) computerChoice =  "paper";
    else  computerChoice = "scissor";

    console.log(`Computer is: ${computerChoice} `)
    return computerChoice;
}


function playRound(playerChoice, computerChoice) {
    
    if (playerChoice === computerChoice) {
        playerScore++;
        computerScore++;
        return "Draw! ";
       
    }
    else if (playerChoice === "rock" && computerChoice === "scissor" || playerChoice === "scissor" && computerChoice === "paper" || playerChoice === "paper" && computerChoice === "rock") {
        playerScore++;
        return `You win! ${playerChoice} beats ${computerChoice}.`;
       
    }

    else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${playerChoice}.`;
        
    }
    //console.log("Player is " + player);
    //console.log("Computer is " + computer);

}

const bud = document.querySelector('body');

const buttons = document.querySelectorAll('button');
let playerChoice;
buttons.forEach(element => { element.addEventListener('click', function(){
    if(this.id == "rock"){ playerChoice = "rock"};
    if(this.id == "paper"){ playerChoice = "paper"};
    if(this.id == "scissor") {playerChoice = "scissor"};
    console.log(`Player is: ${playerChoice}`);
    let final_result = playRound(playerChoice, getComputerChoice());
    const newElement = document.createElement('div');
    newElement.classList.add('result');
    newElement.textContent = `Computer is: ${computerChoice} 
                              Player is: ${playerChoice} 
                              ${final_result}`;
    newElement.style.color = 'green';
    newElement.style.fontWeight = 'Bold'
    bud.appendChild(newElement);
    
})

});





