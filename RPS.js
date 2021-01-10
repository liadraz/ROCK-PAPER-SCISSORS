<script>    
    // Play randomly and return eiter 'Rock', 'Paper', 'Scissors' to make the computer's play.
    function getComputerSelection() {
        let computerSelection = Math.floor(Math.random() * 3);
        if (computerSelection === 0) {
            return 'rock';
        } else if (computerSelection === 1) {
            return 'paper';
        } else
            return 'scissors';
    }    

    // Prompt selection from the user. Check for validation
    function getPlayerSelection() {
        while (true) {
            let playerSelection = prompt("Choose to play with - (Rock) (Paper) (Scissors)");
            let input = playerSelection.toLowerCase();
            if (input === 'rock' || input === 'paper' || input === 'Scissors') {
                return input;
            }
        }
    }    


    // Compare Player and Computer Selections. Count who win.
    function playRound(playerSelection, computerSelection) {

        if (playerSelection == computerSelection) {
            return "tie";
        } else {
            switch(playerSelection) {
            case 'rock':
                // If Player selection is Rock < paper is stronger
                if (computerSelection === 'paper') {
                    return result = 'Computer Wins';
                // Otherwise rock wins > scissors 
                } else {
                    return result = 'You Win';
                }
                break
            case 'paper':
                // If Player selection is paper < scissors is stronger
                if (computerSelection === 'scissors') {
                    return result = 'Computer Wins'; 
                // Otherwise paper wins > rock
                } else {
                    return result = 'You Win';
                }
                break
            case 'scissors':
                // If Player selection is scissors < rock is stronger
                if (computerSelection === 'rock') {
                    return result = 'Computer Wins'; 
                // Otherwise scissors wins > paper
                } else {
                    return result = 'You Win';
                }
                break
            }
        }
    }

    function game() {
        i = 0;
        playerCounter = 0;
        computerCounter = 0;

        // Play a five round game
        while (i < 5) {
        
            // Get player and compuer selection
            let playerSelection = getPlayerSelection();
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
    }

    function finalResults(playerCounter, computerCounter) {
        if (playerCounter > computerCounter) {
            return "You WIN!"
        }   else if (playerCounter < computerCounter) {
            return "You Lost!"
        } else {
            return "It is a tie"
        }
    }

    game();

    </script>