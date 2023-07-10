function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    switch(num) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function singleRound(pc) {
    let cc = getComputerChoice();

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

const display = document.querySelector(".display");
const btns = document.querySelectorAll(".btn");
btns.forEach(btn => btn.addEventListener("click", getResult));

function getResult(e) {
    let result = "";
    if(e.target.textContent === "Rock") {
        result = singleRound("rock");
    } 
    else if(e.target.textContent === "Paper") {
        result = singleRound("paper");
    } 
    else {
        result = singleRound("scissors");
    }
    displayResult(result);
}


function displayResult(result) {
    const ptag = document.querySelector(".result");
    ptag.textContent = result;
    display.appendChild(ptag);
}