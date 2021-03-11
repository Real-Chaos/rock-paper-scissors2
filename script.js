// Global Scope -------------------------------------------------------------------------------------------------------------------------------
const playerRock = document.querySelector('.playerRock');
const playerPaper = document.querySelector('.playerPaper');
const playerScissors = document.querySelector('.playerScissors')

let playerSelection = null;
let botScore = document.querySelector('.botScoreCount');
let botScoreCount = Number(botScore.textContent);

let playerScore = document.querySelector('.playerScoreCount');
let playerScoreCount = Number(playerScore.textContent);
let result = document.querySelector('.result')

// Create Nickname ----------------------------------------------------------------------------------------------------------------------------
const askNickname = String(prompt('Enter players nickname'));
const nickname = document.querySelector('.nickname');
nickname.textContent = askNickname;

// Computer Move --------------------------------------------------------------------------------------------------------------------------------
function computerMove() {
    let computerMove = Math.floor((Math.random() * 3) + 1);
    switch(computerMove) {
        case 1:
            computerMove = 'rock';
            break;
        case 2:
            computerMove = 'paper';
            break;
        case 3:
            computerMove = 'scissors';
            break;
    }
    return computerMove;
}


//listeners ---------------------------------------------------------------------------------------------------------------------------------------
playerRock.addEventListener('click', () => {
    playerSelection = 'rock';
    let computerSelection = computerMove();
    if(computerSelection === 'paper') {
        botScoreCount++;
        botScore.textContent = botScoreCount;
        result.textContent = `Computer chose ${computerSelection}! You lose.`;
    }

    else if(computerSelection === 'scissors') {
        playerScoreCount++;
        playerScore.textContent = playerScoreCount;
        result.textContent = `Computer chose ${computerSelection}! You win.`;

    }

    else if(computerSelection === 'rock') {
        result.textContent = `Computer chose ${computerSelection}! Tie.`;
    }
        
});

playerPaper.addEventListener('click', ()=> {
    playerSelection = 'paper';
    let computerSelection = computerMove();
    if(computerSelection === 'scissors') {
        botScoreCount++;
        botScore.textContent = botScoreCount;
        result.textContent = `Computer chose ${computerSelection}! You lose.`;

    }

    else if(computerSelection === 'rock') {
        playerScoreCount++;
        playerScore.textContent = playerScoreCount;
        result.textContent = `Computer chose ${computerSelection}! You win.`;
    }

    else if(computerSelection === 'paper') {
        result.textContent = `Computer chose ${computerSelection}! Tie.`;
    }
        
});

playerScissors.addEventListener('click', ()=> {
    playerSelection = 'scissors';
    let computerSelection = computerMove();
    if(computerSelection === 'rock') {
        botScoreCount++;
        botScore.textContent = botScoreCount;
        result.textContent = `Computer chose ${computerSelection}! You lose.`;
    }

    else if(computerSelection === 'paper') {
        playerScoreCount++;
        playerScore.textContent = playerScoreCount;
        result.textContent = `Computer chose ${computerSelection}! You win.`;
    }

    else if(computerSelection === 'scissors') {
        result.textContent = `Computer chose ${computerSelection}! Tie.`;
    }

        
});





