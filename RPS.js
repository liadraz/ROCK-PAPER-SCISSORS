
window.addEventListener('click', playRound);



// Prompt selection from the user. Check for validation
function playRound(e) {
    if (e.target.classList.contains('playerButton')) {
        
        const playerSelection = e.target.id;
        const computerSelection = getComputerSelection();
        
        let x = checkRoundWinner(playerSelection, computerSelection);
        score(x);
    }

    
    function score(roundWinner) {
        playerScore = document.querySelector('.playerScore');
        computerScore = document.querySelector('.computerScore');        
        
    let computerCounter = 0;
    let playerCounter = 0;

    if (roundWinner === 'Computer') {
        computerCounter++;
        computerScore.textContent = computerCounter;
    } else if (roundWinner === 'Player') {
        playerCounter++;
        playerScore.textContent = playerCounter;
    } else {
        console.log('Tie');
    }
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


// Compare Player and Computer Selections. Count who win.
function checkRoundWinner(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return "tie";
    } else {
        switch(playerSelection) {
        case 'rock':
            // If Player selection is Rock < paper is stronger
            if (computerSelection === 'paper') {
                return 'Computer';
            // Otherwise rock wins > scissors 
            } else {
                return 'Player';
            }
            break
        case 'paper':
            // If Player selection is paper < scissors is stronger
            if (computerSelection === 'scissors') {
                return 'Computer'; 
            // Otherwise paper wins > rock
            } else {
                return 'Player';
            }
            break
        case 'scissors':
            // If Player selection is scissors < rock is stronger
            if (computerSelection === 'rock') {
                return 'Computer'; 
            // Otherwise scissors wins > paper
            } else {
                return 'Player';
            }
            break
        }
    }
}


/* function game() {
    i = 0;
    playerCounter = 0;
    computerCounter = 0;

    // Play a five round game
    while (i < 5) {
    
        // Get player and compuer selection
        let playerSelection = window.addEventListener('click', getPlayerSelection);
        let computerSelection = getComputerSelection();
        console.log(`Round No(${i + 1})`);
        console.log(`\tPlayer Selection:\t${playerSelection} \n\tComputer Selection:\t${computerSelection}`)
        
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(`\t In this Round - ${roundResult}`);

        // Count the winner for each round
        if (roundResult === 'You Win') {
            playerCounter++;
        } else if (roundResult === 'Computer Wins') {
            computerCounter++;
        }
        i++;
    }
    
    const results = finalResults(playerCounter, computerCounter);
    return console.log(`${results} \nPlayer: ${playerCounter} // Computer: ${computerCounter}`);
} */

/*     function finalResults(playerCounter, computerCounter) {
        if (playerCounter > computerCounter) {
            return "You WIN!"
        }   else if (playerCounter < computerCounter) {
            return "You Lost!"
        } else {
            return "It is a tie"
        }
    } */
 
/*     game();  */
