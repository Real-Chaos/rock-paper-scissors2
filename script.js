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

const playAgain = document.querySelector('.again');

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
        winner();
    }

    else if(computerSelection === 'scissors') {
        playerScoreCount++;
        playerScore.textContent = playerScoreCount;
        result.textContent = `Computer chose ${computerSelection}! You win.`;
        winner();

    }

    else if(computerSelection === 'rock') {
        result.textContent = `Computer chose ${computerSelection}! Tie.`;
        winner();
    }
        
});

playerPaper.addEventListener('click', ()=> {
    playerSelection = 'paper';
    let computerSelection = computerMove();
    if(computerSelection === 'scissors') {
        botScoreCount++;
        botScore.textContent = botScoreCount;
        result.textContent = `Computer chose ${computerSelection}! You lose.`;
        winner();

    }

    else if(computerSelection === 'rock') {
        playerScoreCount++;
        playerScore.textContent = playerScoreCount;
        result.textContent = `Computer chose ${computerSelection}! You win.`;
        winner();
    }

    else if(computerSelection === 'paper') {
        result.textContent = `Computer chose ${computerSelection}! Tie.`;
        winner();
    }
        
});

playerScissors.addEventListener('click', ()=> {
    playerSelection = 'scissors';
    let computerSelection = computerMove();
    if(computerSelection === 'rock') {
        botScoreCount++;
        botScore.textContent = botScoreCount;
        result.textContent = `Computer chose ${computerSelection}! You lose.`;
        winner();
    }

    else if(computerSelection === 'paper') {
        playerScoreCount++;
        playerScore.textContent = playerScoreCount;
        result.textContent = `Computer chose ${computerSelection}! You win.`;
        winner();
    }

    else if(computerSelection === 'scissors') {
        result.textContent = `Computer chose ${computerSelection}! Tie.`;
        winner();
    }

        
});



//Winner ------------------------------------------------------------------------------------------------------------------------------------------------------

function winner() {
    if(playerScore.textContent === '5') {
        const main = document.querySelector('main')
        main.style.opacity = '0'
        let winner = document.querySelector('.winner');
        winner.textContent = `${nickname.textContent} Won!`;
        playAgain.textContent = 'Play Again';
        playAgain.style.opacity = '1';
    }
      else if(botScore.textContent === '5') {
        const main = document.querySelector('main')
        main.style.opacity = '0'
        let winner = document.querySelector('.winner');
        winner.textContent = 'Computer Won';
        playAgain.textContent = 'Play Again';
        playAgain.style.opacity = '1';
        }
}


// Play Again -----------------------------------------------------------------------------------------------------------------------------------------------------

playAgain.addEventListener('click', () => {
    botScoreCount = 0;
    playerScoreCount = 0;
    playerScore.textContent = playerScoreCount;
    botScore.textContent = botScoreCount;
    const main = document.querySelector('main');
    main.style.opacity = '1';
    playAgain.textContent = '';
    playAgain.style.opacity = '0';
    let winner = document.querySelector('.winner');
    winner.textContent = ``;

});



