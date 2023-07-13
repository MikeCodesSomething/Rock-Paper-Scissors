const WINSCORE = 5

//Script
let playerScore = 0;
let computerScore = 0;
let round = 0;
let log = document.querySelector('#log');
let playerScoreDisplay = document.querySelector('#player-score');
let computerScoreDisplay = document.querySelector('#computer-score');
let buttons = document.querySelectorAll('button');
let roundDisplay = document.querySelector('#round');
buttons.forEach(button => button.addEventListener('click',playRound));

function playRound(event) {
    round += 1
    roundDisplay.textContent = `Round: ${round}`
    computerChoice = getComputerChoice();
    playerChoice = event.target.id; //id of the button clicked
    announceWinner(computerChoice,playerChoice);
    if(playerScore >= WINSCORE || computerScore >= WINSCORE) {
        buttons.forEach(button => button.disabled = true);
        let winner = computerScore > playerScore? 'computer' : 'player'
        log.textContent += ` Game Over, ${winner} wins!`
        const resetButton = document.createElement('button');
        resetButton.textContent = "Play Again";
        resetButton.addEventListener('click',resetGame)
        document.body.appendChild(resetButton)

    }
          
}

function resetGame(event) {
    resetButton = event.target;
    resetButton.remove();
    playerScore = 0;
    computerScore = 0;
    round = 0;
    log.textContent = '"Rock","Paper" or "Scissors" to play';
    roundDisplay.textContent = `Round: ${round}`;
    playerScoreDisplay.textContent = `Player score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer score: ${computerScore}`;   
    buttons.forEach(button => button.disabled = false);
   
}

function announceWinner(computerChoice,playerChoice) {
    if (playerChoice === computerChoice) {
        log.textContent =`Draw! Both played ${playerChoice}.`
    }
    else if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
            log.textContent =`You win! ${playerChoice} beats ${computerChoice}.`;
            playerScore += 1;
            playerScoreDisplay.textContent = `Player score: ${playerScore}`;
        }
        else if (computerChoice === 'paper') {
            log.textContent =`You lose! ${computerChoice} beats ${playerChoice}.`;
            computerScore += 1;
            computerScoreDisplay.textContent = `Computer score: ${computerScore}`;        }

    }
    else if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') {
            log.textContent =`You win! ${playerChoice} beats ${computerChoice}.`;
            playerScore += 1;
            playerScoreDisplay.textContent = `Player score: ${playerScore}`;
        }
        else if (computerChoice === 'rock') {
            log.textContent =`You lose! ${computerChoice} beats ${playerChoice}.`;
            computerScore += 1;
            computerScoreDisplay.textContent = `Computer score: ${computerScore}`;        }

    }
    else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            log.textContent =`You win! ${playerChoice} beats ${computerChoice}.`;
            playerScore += 1;
            playerScoreDisplay.textContent = `Player score: ${playerScore}`;
        }
        else if (computerChoice === 'scissors') {            computerScoreDisplay.textContent = `Computer score: ${computerScore}`;        }

            log.textContent =`You lose! ${computerChoice} beats ${playerChoice}.`;
            computerScore += 1;
            computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
        }

    else log.textContent ='something is wrong in the announceWinner function'
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
        log.textContent ='something is wrong in getComputerChoice'
    }

}