playerScore = document.querySelector('.playerScore');
computerScore = document.querySelector('.computerScore'); 

log = document.querySelector('.log');    
computerSelectionBox = document.querySelector('.box');


window.addEventListener('click', playRound);


function playRound(e) {
    if (e.target.classList.contains('playerButton')) {
        let playerSelection = e.target.id;
        let computerSelection = getComputerSelection();
        showComputerSelection(computerSelection);

        let roundResult = checkRoundWinner(playerSelection, computerSelection);
        addWinnerScore(roundResult);
        logRonudResult(roundResult)
        endGame();
    }
}   

function endGame() {
    if ((playerScore.textContent === '5') || (computerScore.textContent === '5')) {
        log.textContent = 'Game Over';
        // You/Computer win
        // Try again
    }
}


function addWinnerScore (result) {
    if (result === 'Computer') {
        return counteScoreUp(computerScore);
    } else if (result === 'Player') {
        return counteScoreUp(playerScore);
    } else {
        return 'tie';
    }
}

function counteScoreUp(div) {
    counter = parseInt(div.textContent) + 1;
    div.textContent = counter;
    return div.textContent;
}

function logRonudResult(result) {
    switch(result) {
        case 'Player':
            return log.textContent = 'You Won';
        case 'Computer':
            return log.textContent = 'You Lost';
        case 'tie':
            return log.textContent = 'Draw';
    }
}




// Computer play randomly and return eiter 'Rock', 'Paper', 'Scissors'.
function getComputerSelection() {
    let computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection === 0) {
        return 'rock';
    } else if (computerSelection === 1) {
        return 'paper';
    } else
    return 'scissors';
}

function showComputerSelection(selection) {
    return computerSelectionBox.setAttribute('id', selection);
}




// Compare Player and Computer Selections. Count who win.
function checkRoundWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie";
    } else {
        switch(playerSelection) {
        case 'rock':
            // If Player selection is Rock < paper is stronger
            if (computerSelection === 'paper') {
                return result = 'Computer';
            // Otherwise rock wins > scissors 
            } else {
                return result = 'Player';
            }
            break
        case 'paper':
            // If Player selection is paper < scissors is stronger
            if (computerSelection === 'scissors') {
                return result = 'Computer'; 
            // Otherwise paper wins > rock
            } else {
                return result = 'Player';
            }
            break
        case 'scissors':
            // If Player selection is scissors < rock is stronger
            if (computerSelection === 'rock') {
                return result = 'Computer'; 
            // Otherwise scissors wins > paper
            } else {
                return result = 'Player';
            }
            break
        }
    }
}
