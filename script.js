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
// // function playerMove() {
// //     playerRock.addEventListener('click', ()=> {
// //         playersMove = playerRock;
// //         computerMove();
// //     })
// //     playerPaper.addEventListener('click', ()=> {
// //         computerMove();
// //     })
// //     playerScissors.addEventListener('click', ()=> {
// //         computerMove();
// //     })
// // }
// playerMove();

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

// console.log(computerMove());
// One Round
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
        else if(botScoreCount === 5|| playerScoreCount === 5) {
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
        else if(botScoreCount === 5|| playerScoreCount === 5) {
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
        else if(botScoreCount === 5|| playerScoreCount === 5) {
            botScoreCount = 0;
            botScore.textContent = botScoreCount;
            playerScoreCount = 0;
            playerScore.textContent = botScoreCount;
            console.log(computerMove());
        }
    });


}

game();


// // Game 
// let botScore = document.querySelector('.botScoreCount');
// let botScoreCount = Number(botScore.textContent);
// console.log(typeof botScoreCount);

// let playerScore = document.querySelector('.playerScoreCount');
// let playerScoreCount = Number(botScore.textContent);
// console.log(typeof playerScoreCount);

// function playRound() {
//     playerRock.addEventListener('click', () => {
//         if(computerChoice === document.querySelector('.paper')) {
//             botScoreCount++;
//             botScore.textContent = botScoreCount;
//             computerMove();
//             console.log(botScore);       
//         }
//     });
//     playerPaper.addEventListener('click', ()=> {
//         if(computerChoice === document.querySelector('.scissors')) {
//             botScoreCount++;
//             botScore.textContent = botScoreCount;
//             computerMove();
        
//         }
//     });
//     playerScissors.addEventListener('click', () => {
//         if(computerChoice === document.querySelector('.rock')) {
//             botScoreCount++
//             botScore.textContent = botScoreCount;
//             computerMove();
//         }
//     })
// }
// playRound();

