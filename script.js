// Create Nickname
const askNickname = String(prompt('Enter players nickname'));
const nickname = document.querySelectorAll('.nickname');
nickname.forEach(nick => {
    nick.textContent = askNickname.slice(0, 10);
});

// Computer Move

function computerMove() {
   const rock = document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissors = document.querySelector('.scissors')
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

// Player Move 

function playerMove() {
    const playerRock = document.querySelector('.playerRock');
    const playerPaper = document.querySelector('.playerPaper');
    const playerScissors = document.querySelector('.playerScissors');
    let playerSelection;
    playerRock.addEventListener('click', () => {
        playerSelection = playerRock;
        return console.log(playerSelection);
    });

    playerPaper.addEventListener('click', () => {
        playerSelection = playerPaper;
    });
    playerScissors.addEventListener('click', () => {
        playerSelection = playerScissors;
        });
    }
yes = playerMove();
console.log(yes);
