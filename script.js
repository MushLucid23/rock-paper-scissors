function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}
    console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Choose Rock, Paper, or Scissors:").toLowerCase();
        while (!["rock", "paper", "scissors"].includes(choice)) {
            choice = prompt("Invalid choice. Please choose Rock, Paper, or Scissors:").toLowerCase();
        }

        return choice;
}    

let humanChoice = getHumanChoice();
console.log("You chose:", humanChoice);

    


 
    

    

