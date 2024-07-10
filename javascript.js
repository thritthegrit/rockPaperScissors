function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let selection = Math.floor(Math.random()*3);
    if (selection === 0) {
        return choices[0];
    } else if (selection === 1) {
        return choices[1];
    } else {
        return choices[2];
    }
}

function getHumanChoice() {
    valid = false;
    humanChoice = prompt('Choose one between rock, paper, or scissors');
    while(!valid) {
        if (humanChoice === "rock") {
            valid = true;
        } else if (humanChoice === 'scissors') {
            valid = true;
        } else if (humanChoice === 'paper') {
            valid = true;
        } else {
            humanChoice = prompt("Try again");
        }
    }
    return humanChoice;
}

console.log(getHumanChoice())