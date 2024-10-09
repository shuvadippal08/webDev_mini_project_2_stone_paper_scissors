const choices = document.querySelectorAll(".choice");
let user =  document.querySelector("#user-score");
let comp = document.querySelector("#computer-score");
const message =  document.querySelector("#message");
let userScore = 0;
let compScore = 0;
const generateComputerChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    // "rock", "paper", "scissors"
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}
const drawGame  = () =>{
    console.log("Game was draw");
    message.innerText = "Game was Draw play again.";
    message.style.backgroundColor = "#EBB3A9";
    message.style.color = "black";
};
const showWinner = (userWin,userChoice, computerChoice) =>{
    if(userWin) {
        userScore++;
        user.innerText = `${userScore}`;
        message.innerText = `Wow! you win... (your ${userChoice}  beats ${computerChoice})`;
        message.style.backgroundColor = "green";
    }
    else{
        compScore++;
        comp.innerText = `${compScore}`;
        message.innerText = `sorry You lose the game!!! (${computerChoice} beats your ${userChoice} ) `;
        message.style.backgroundColor = "red";
    }
};
const playGame = (userChoiceId) =>{
    //generate computer choice -> Modular based programming
    const computerChoice  = generateComputerChoice();
    if(userChoiceId === computerChoice){
        //draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoiceId === "rock"){
            //computer choice left paper and scissors
            userWin = computerChoice === "paper" ? false : true;
        }
        else if(userChoiceId === "paper"){
            //computer choice left scissors and rock
            userWin = computerChoice === "scissors" ? false : true;
        }
        else{
            //computer choice left rock and paper
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoiceId, computerChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoiceId = choice.getAttribute("id");
        playGame(userChoiceId);
    });
});