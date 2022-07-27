function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let choice = 
    (randomNumber === 0) ? 'Paper' : 
    (randomNumber === 1) ? 'Rock' :
    'Scissors'; 
    return choice;
}
