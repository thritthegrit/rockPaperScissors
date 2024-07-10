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
    let humanChoice = prompt('Choose one between rock, paper, or scissors').toLowerCase();
    //console.log(humanChoice.toLowerCase());
    while(!valid) {
        if (humanChoice == "rock") {
            valid = true;
        } else if (humanChoice == 'scissors') {
            valid = true;
        } else if (humanChoice == 'paper') {
            valid = true;
        } else {
            humanChoice = prompt("Try again").toLowerCase();
        }
    }
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    if (humanChoice==='rock' && computerChoice ==='paper'){
        console.log('You lose! Paper beats rock!');
        computerScore++;
    } else if (humanChoice==='rock' && computerChoice ==='scissors') {
        console.log('You win! Rock beats scissors!');
        humanScore++;
    } else if (humanChoice==='rock' && computerChoice==='rock') {
        console.log("Tie! Rock and Rock");
        humanScore++;
        computerScore++;
    } else if (humanChoice==='paper' && computerChoice==='rock') {
        console.log('You win! Paper beats rock!');
        humanScore++;
    } else if (humanChoice==='paper' && computerChoice==='scissors') {
        console.log('You lose! Scissors beats paper')
        computerScore++;
    } else if (humanChoice==='paper' && computerChoice==='paper') {
        console.log("Tie! Paper and Paper");
        humanScore++;
        computerScore++;
    } else if (humanChoice==='scissors' && computerChoice==='paper') {
        console.log('You win! Scissors beats paper');
        humanScore++;
    } else if (humanChoice==='scissors' && computerChoice==='rock') {
        console.log('You lose! Rock beats scissors');
        computerScore++;
    } else if (humanChoice==='scissors' && computerChoice==='scissors') {
        console.log('Tie! Scissors and Scissors');
        humanScore++;
        computerScore++;
    }
}

function playGame() {
    for (let i=0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log('Your Score: ' + humanScore + ' Computer Score: ' + computerScore);
}

playGame();