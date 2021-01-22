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
    }
}   



function addWinnerScore (result) {
    if (result === 'Computer') {
        return counteScoreUp(computerScore);
    } else if (result === 'Player') {
        return counteScoreUp(playerScore);
    } else {
        return announceTie();
    }
}

function counteScoreUp(div) {
    counter = parseInt(div.textContent) + 1;
    div.textContent = counter;
    return div.textContent;
}

function announceTie() {
    let counter = 0;
    return log.textContent = `Round ${counter} Tie`;
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
    let x = computerSelectionBox.appendChild(document.createTextNode(selection));
    return x;
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
