
//function that receives the preference of the user and stores it at variable choice
// playerSelection = ()=> prompt("Enter your choice."); 
let computerScore = 0;
let playerScore = 0;
let counter = 0; // number of games played

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
        console.log(playerScore);
        console.log(computerScore);
        return "Draw! ";
       
    }
    else if (playerChoice === "rock" && computerChoice === "scissor" || playerChoice === "scissor" && computerChoice === "paper" || playerChoice === "paper" && computerChoice === "rock") {
        playerScore++;
        console.log(playerScore);
        console.log(computerScore);
        return `You win! ${playerChoice} beats ${computerChoice}.`;
       
    }

    else {
        computerScore++;
        console.log(playerScore);
        console.log(computerScore);
        return `You lose! ${computerChoice} beats ${playerChoice}.`;
        
    }
    //console.log("Player is " + player);
    //console.log("Computer is " + computer);
    

}

const bud = document.querySelector('body');

const buttons = document.querySelectorAll('button');
let playerChoice;
let winner; //winner of 5
buttons.forEach(element => { element.addEventListener('click', function(){
    if(this.id == "rock"){ playerChoice = "rock"; counter++};
    if(this.id == "paper"){ playerChoice = "paper"; counter++};
    if(this.id == "scissor") {playerChoice = "scissor"; counter++};
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
    if (counter == 5) {
        if(playerScore > computerScore) winner = "Player Won!";
        else if (computerScore > playerScore) winner = "Computer Won";
        else winner = "Draw!"
        const announce = document.createElement('p');
        announce.textContent = `Player ${playerScore} - ${computerScore} Computer`;
        bud.appendChild(announce);
        const breaker = document.createElement('br');
        bud.appendChild(breaker);

        const winnerOfFive = document.createElement('p');
        //winner.classList.add("winnerOfFive");
        winnerOfFive.textContent = winner;
        bud.appendChild(winnerOfFive);
        
    }
    
})

});





