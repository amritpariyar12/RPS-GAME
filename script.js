let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was draw!. Play Again.";
    msg.style.background = "#081b31";
};

const showwinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.background = "green";
    }else{
        compChoice++;
        compScorepara.innerText = compScore;
        msg.innerText = `You Loose! ${compChoice} beats your ${userChoice}`;
        msg.style.background = "red";
    }
};


const playGame = (userChoice) => { 
    const compChoice = genCompChoice();
 
    if (userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            compChoice === "rock" ? false : true;
        }
        showwinner(userWin, userChoice, compChoice);
    }
};


choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
