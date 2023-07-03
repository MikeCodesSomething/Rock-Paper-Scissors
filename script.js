//Script
let totalRounds = 5
game()

//Functions
function game() {
    let playerScore = 0
    let computerScore = 0
    for (let round = 1; round <= totalRounds; round++) {
        console.log(`Round ${round} / ${totalRounds}, the score is Player: ${playerScore}, Computer: ${computerScore}`)
        computerChoice = getComputerChoice()
        playerChoice = getPlayerChoice(round)
        if (playerChoice === 'quit') {
            break;
        }
        let result = playRound(computerChoice,playerChoice)
        if (result === 'playerWin') {
            playerScore++
        }
        if (result === 'computerWin') {
            computerScore++
        }
    }
    console.log(`Final scores: Player: ${playerScore}, Computer: ${computerScore}`)   
}

function playRound(computerChoice,playerChoice) {
    if (playerChoice === computerChoice) {
        console.log('Draw!')
        return 'draw'
    }
    else if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
            console.log(`You win! ${playerChoice} beats ${computerChoice}.`)
            return 'playerWin'
        }
        else if (computerChoice === 'paper') {
            console.log(`You lose! ${computerChoice} beats ${playerChoice}.`)
            return 'computerWin'
        }

    }
    else if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') {
            console.log(`You win! ${playerChoice} beats ${computerChoice}.`)
            return 'playerWin'
        }
        else if (computerChoice === 'rock') {
            console.log(`You lose! ${computerChoice} beats ${playerChoice}.`)
            return 'computerWin'

        }

    }
    else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            console.log(`You win! ${playerChoice} beats ${computerChoice}.`)
            return 'playerWin'
        }
        else if (computerChoice === 'scissors') {
            console.log(`You lose! ${computerChoice} beats ${playerChoice}.`)
            return 'computerWin'
        }

    }

    else console.log('something is wrong in the playRound function')
       
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
        console.log('something is wrong in getComputerChoice')
    }

}

function getPlayerChoice(round) {
    choice = prompt(`Round ${round}: Choose rock, paper, scissors or quit (lower case)`)
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors' || choice === 'quit') {
        return choice
    }
    else while(true) {
        choice = prompt('Try again, your choice must be rock, paper, scissors or quit in lower case')
        if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
            return choice
    }
    console.log('something is wrong in the getPlayerChoice function')
    }
}

