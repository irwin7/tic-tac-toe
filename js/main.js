let elContainer = document.querySelector(".container");
let elCover = document.querySelector(".cover");
let elSpan = document.querySelector(".turn-span");
let elCoverSpan = document.querySelector(".cover-span");
let elRetryBtn = document.querySelector(".retry-btn");
let playerTurnArr = [];
let role = 0;
function start(){
    for (let i = 1; i <= 9; i++) {
        elContainer.innerHTML += `<div id="${i}" class="cell"></div>`;
    }
    for(let i = 1; i <= 9; i++){
        playerTurnArr.push("null")
    }
}
start();
elRetryBtn.addEventListener('click', ()=>{
    elContainer.innerHTML = " ";
    elCover.classList.remove("d-flex");
    role = 0;
    elSpan.innerHTML = "X";
    playerTurnArr = [];
    start();
})
elContainer.addEventListener('click', (e) => {
    let element = document.getElementById(`${e.target.id}`).classList;
    if(element.length == 1){
        if (role == 0) {
            element.add("theX");
            role = 1;
            elSpan.innerHTML = "O";
            playerTurnArr[e.target.id - 1] = "x";
        }
        else if (role == 1) {
            element.add("theO");
            role = 0;
            elSpan.innerHTML = "X";
            playerTurnArr[e.target.id - 1] = "o";
        }
    }
    if(playerTurnArr[0]=="x" && playerTurnArr[1] == "x" && playerTurnArr[2] == "x" 
    || playerTurnArr[0]=="x" && playerTurnArr[3] == "x" && playerTurnArr[6] == "x" 
    || playerTurnArr[1]=="x" && playerTurnArr[4] == "x" && playerTurnArr[7] == "x" 
    || playerTurnArr[2]=="x" && playerTurnArr[5] == "x" && playerTurnArr[8] == "x" 
    || playerTurnArr[3]=="x" && playerTurnArr[4] == "x" && playerTurnArr[5] == "x" 
    || playerTurnArr[6]=="x" && playerTurnArr[7] == "x" && playerTurnArr[8] == "x" 
    || playerTurnArr[2]=="x" && playerTurnArr[4] == "x" && playerTurnArr[6] == "x"){
        elCover.classList.add("d-flex");
        elCoverSpan.innerHTML = "X"
    }
    if(playerTurnArr[0]=="o" && playerTurnArr[1] == "o" && playerTurnArr[2] == "o" 
    || playerTurnArr[0]=="o" && playerTurnArr[3] == "o" && playerTurnArr[6] == "o" 
    || playerTurnArr[1]=="o" && playerTurnArr[4] == "o" && playerTurnArr[7] == "o" 
    || playerTurnArr[2]=="o" && playerTurnArr[5] == "o" && playerTurnArr[8] == "o" 
    || playerTurnArr[3]=="o" && playerTurnArr[4] == "o" && playerTurnArr[5] == "o" 
    || playerTurnArr[6]=="o" && playerTurnArr[7] == "o" && playerTurnArr[8] == "o" 
    || playerTurnArr[2]=="o" && playerTurnArr[4] == "o" && playerTurnArr[6] == "o"){
        elCover.classList.add("d-flex");
        elCoverSpan.innerHTML = "O"
    }
})