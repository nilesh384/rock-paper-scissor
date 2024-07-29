let point = prompt("select match points");
let body = document.querySelector("body");
let choices = document.querySelectorAll(".choice");
let btn = document.querySelector("#reset");



let message = document.querySelector(".message");
let userPoint = document.querySelector("#yourscore");
let compPoint =  document.querySelector("#compscore");
let userScore = 0;
let compScore = 0;

let genChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    let test = Math.floor(Math.random()*3);
    return options[test];
}

const userWin = () =>{
    message.innerText = "Congratulations, you Won 🎉";
    message.style.backgroundColor = "green";
    userScore++;
    userPoint.innerText = userScore;
    console.log("your choice is ",userChoice);
} 

const compWin = () =>{
    message.innerText = "Comp defeated you";
    message.style.backgroundColor = "red";
    compScore++;
    compPoint.innerText = compScore;
    console.log("comp choice is ",compChoice);
}

const drawGame = () =>{
    message.innerText = "Draw!";
    message.style.backgroundColor = "black";
}

const playGame = (userChoice) =>{
    const compChoice = genChoice();

    if(userChoice === "rock" && compChoice === "scissor" || userChoice === "paper" && compChoice === "rock" || 
        userChoice === "scissor" && compChoice === "paper"){
        userWin();
    }

    if(userChoice === "rock" && compChoice === "paper" || userChoice === "paper" && compChoice === "scissor" || 
        userChoice === "scissor" && compChoice === "rock"){
        compWin();
    }

    if(userChoice === compChoice){
        drawGame();
    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

if(userScore === point){
    userWon();
}
if(compPoint === point){
    compWon()
}

const resetGame =() =>{
    userScore = 0;
    userPoint.innerText = 0;
    compSCore = 0;
    compPoint.innerText = 0;
    message.innerText = "Play your turn";
    message.style.backgroundColor = "black";
}

btn.addEventListener("click",resetGame);