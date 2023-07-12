//Script
let playerScore = 0;
let computerScore = 0;
let round = 0;
let message = document.querySelector('#message');
let playerScoreDisplay = document.querySelector('#player-score');
let computerScoreDisplay = document.querySelector('#computer-score');
let buttons = document.querySelectorAll('button');
let roundDisplay = document.querySelector('#round');
buttons.forEach(button => button.addEventListener('click',playRound));
//message.textContent =`Final scores: Player: ${playerScore}, Computer: ${computerScore}`




function playRound(event) {
    round += 1
    roundDisplay.textContent = `Round: ${round}`
    computerChoice = getComputerChoice();
    playerChoice = event.target.id; //id of the button clicked
    announceWinner(computerChoice,playerChoice);
    if(playerScore >= 5) {
        message.textContent += " Game Over, player wins!"
        buttons.forEach(button => button.disabled = true);
    }
    else if (computerScore >= 5) {
        message.textContent += " Game Over, computer wins!"
        buttons.forEach(button => button.disabled = true);
    } 
    
       
}

function announceWinner(computerChoice,playerChoice) {
    if (playerChoice === computerChoice) {
        message.textContent =`Draw! Both played ${playerChoice}.`
    }
    else if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
            message.textContent =`You win! ${playerChoice} beats ${computerChoice}.`;
            playerScore += 1;
            playerScoreDisplay.textContent = `Player score: ${playerScore}`;
        }
        else if (computerChoice === 'paper') {
            message.textContent =`You lose! ${computerChoice} beats ${playerChoice}.`;
            computerScore += 1;
            computerScoreDisplay.textContent = `Computer score: ${computerScore}`;        }

    }
    else if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') {
            message.textContent =`You win! ${playerChoice} beats ${computerChoice}.`;
            playerScore += 1;
            playerScoreDisplay.textContent = `Player score: ${playerScore}`;
        }
        else if (computerChoice === 'rock') {
            message.textContent =`You lose! ${computerChoice} beats ${playerChoice}.`;
            computerScore += 1;
            computerScoreDisplay.textContent = `Computer score: ${computerScore}`;        }

    }
    else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            message.textContent =`You win! ${playerChoice} beats ${computerChoice}.`;
            playerScore += 1;
            playerScoreDisplay.textContent = `Player score: ${playerScore}`;
        }
        else if (computerChoice === 'scissors') {
            message.textContent =`You lose! ${computerChoice} beats ${playerChoice}.`;
            computerScore += 1;
            computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
        }

    }

    else message.textContent ='something is wrong in the announceWinner function'
}


function getComputerChoice() {
    let randomValue = Math.floor(Math.random() * 3)
    if(randomValue === 0) {
        return 'rock'
    }
    else if (randomValue === 1) {
        return 'paper'
    }
    else if (randomValue === 2) {
        return 'scissors'
    }
    else {
        message.textContent ='something is wrong in getComputerChoice'
    }

}