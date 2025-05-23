let userScore=0;
let compScore=0;
let reset = document.querySelector("#btn");
const msg = document.querySelector("#msg");
const userscore = document.querySelector("#user-score");
const computerscore = document.querySelector("#computer-score");

const choices = document.querySelectorAll(".choice");
const resetgame = ()=>{
    userScore = 0;
    compScore = 0;
    userscore.innerText = userScore;
    computerscore.innerText = compScore
}
const genComputerChoice = () =>{
    const options = ["rock","paper","scissor"];
    let index = Math.floor(Math.random()*3);
    return options[index];
}
const drawGame = ()=>{
    msg.innerText = "Game was Draw :|"
    msg.style.backgroundColor = "blue"
}
const showwinner = (userwin,userChoice,compChoice)=>{
    if(userwin){
        msg.innerText = `You Win:) ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
        userScore++;
        userscore.innerText = userScore;
    }else{
        msg.innerText = `You Loose:( ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red"
        compScore++;
        computerscore.innerText = compScore;
    }
}

const playgame = (userChoice)=>{
    let userwin;
     const compChoice = genComputerChoice();

     if(userChoice === compChoice){
        drawGame();
        return; 
     }else{
        userwin = true;
        if(userChoice==="rock"){
            userwin = compChoice === "paper" ? false:true;
        }else if(userChoice==="paper"){
            userwin = compChoice === "scissor"?false:true;
        }else{
            userwin = compChoice === "rock"?false:true;
        }
     }
    showwinner(userwin,userChoice,compChoice);
}

choices.forEach((choice) =>{
    console.log(choice)
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    })
})


reset.addEventListener("click",()=>{
    resetgame();
    msg.innerText = "Play Your Move";
    msg.style.backgroundColor = "#081b31";
})