function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let choice = 
    (randomNumber === 0) ? 'Paper' : 
    (randomNumber === 1) ? 'Rock' :
    'Scissors'; 
    return choice;
}

function getPlayerChoice() {
    let choice = prompt("Paper, rock or scissors?");
    return choice.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
}

function playRound(computerChoice, playerChoice) {
    if ((computerChoice === "Paper" && playerChoice === "Rock") || (computerChoice === "Scissors" && playerChoice === "Paper") || (computerChoice === "Rock" && playerChoice === "Scissors")) {
        console.log("You lost!");
        return 0;
    }
    console.log("You win!");
    return 1;
}

function game() {
    let wins = 0;
    let defeats = 0;
    for(let i = 0; i < 5; i++) {
        if (playRound(getComputerChoice(), getPlayerChoice())) {
            wins++;
        } else {
            defeats++;
        }

        console.log(`Wins: ${wins} Defeats ${defeats}`);
    }

    if (wins > defeats) {
        console.log("You won the game!!!");
        return
    }
    console.log("You lost the game!!!");
}





