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




