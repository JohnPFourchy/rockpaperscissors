function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    switch(num) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function singleRound(playerChoice, computerChoice) {
    let pc = playerChoice.toLowerCase();
    let cc = computerChoice.toLowerCase();

    // Player wins
    if(pc === "rock" && cc === "scissors") {
        return "You win! Rock beats Scissors."
    } else if(pc === "paper" && cc === "rock") {
        return "You win! Paper beats Rock."
    } else if(pc === "scissors" && cc === "paper") {
        return "You win! Scissors beats Paper."
    // Computer wins
    } else if(cc === "rock" && pc === "scissors") {
        return "You lose! Rock beats Scissors."
    } else if(cc === "paper" && pc === "rock") {
        return "You lose! Paper beats Rock."
    } else if(cc === "scissors" && pc === "paper") {
        return "You lose! Scissors beats Paper."
    // Tie
    } else {
        return "It's a tie!"
    }
}

function game() {
    for(i = 0; i < 5; i++) {
        cc = getComputerChoice();
        pc = prompt("Rock, Paper, or Scissors?");
        console.log(singleRound(pc, cc));
    }
}

game();