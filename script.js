// Create Nickname
const askNickname = String(prompt('Enter players nickname'));
const nickname = document.querySelectorAll('.nickname');
nickname.forEach(nick => {
    nick.textContent = askNickname.slice(0, 10);
});

// Computer Move 


const playerRock = document.querySelector('.playerRock');
const playerPaper = document.querySelector('.playerPaper');
const playerScissors = document.querySelector('.playerScissors');
let playersMove = null;


// Computer Move
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors')

function computerMove() {
   
    let computerSelection = Math.floor((Math.random() * 3) + 1);
    switch(computerSelection) {
        case 1:
            computerSelection = rock;
            break;
        case 2:
            computerSelection = paper;
            break;
        case 3:
            computerSelection = scissors;
            break;
    }
    return computerSelection;
}


let botScore = document.querySelector('.botScoreCount');
let botScoreCount = Number(botScore.textContent);


let playerScore = document.querySelector('.playerScoreCount');
let playerScoreCount = Number(playerScore.textContent);

function game() {
    playerRock.addEventListener('click', () => {
        if(computerMove() === paper) {
            botScoreCount++;
            botScore.textContent = botScoreCount;
            console.log(computerMove());
        }
        else if(computerMove() === scissors) {
            playerScoreCount++;
            playerScore.textContent = playerScoreCount;
            console.log(computerMove());
        }
        else if(botScoreCount >= 4|| playerScoreCount >= 4) {
            botScoreCount = 0;
            botScore.textContent = botScoreCount;
            playerScoreCount = 0;
            playerScore.textContent = botScoreCount;
            console.log(computerMove());
        }
    });
    playerPaper.addEventListener('click', () => {
        if(computerMove() === scissors) {
            botScoreCount++;
            botScore.textContent = botScoreCount;
            console.log(computerMove());
        }
        else if(computerMove() === rock) {
            playerScoreCount++;
            playerScore.textContent = playerScoreCount;
            console.log(computerMove());
        }
        else if(botScoreCount >= 4|| playerScoreCount >= 4) {
            botScoreCount = 0;
            botScore.textContent = botScoreCount;
            playerScoreCount = 0;
            playerScore.textContent = botScoreCount;
            console.log(computerMove());
        }
    });
    playerScissors.addEventListener('click', () => {
        if(computerMove() === rock) {
            botScoreCount++;
            botScore.textContent = botScoreCount;
            console.log(computerMove());
        }
        else if(computerMove() === paper) {
            playerScoreCount++;
            playerScore.textContent = playerScoreCount;
            console.log(computerMove());
        
        }
        else if(botScoreCount >=4|| playerScoreCount >= 4) {
            botScoreCount = 0;
            botScore.textContent = botScoreCount;
            playerScoreCount = 0;
            playerScore.textContent = botScoreCount;
            console.log(computerMove());
        }
    });


}

game();



