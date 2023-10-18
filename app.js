let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"]


let started = false;
let level = 0;

let h2 = document.querySelector("h2")
let body = document.querySelector("body")

document.addEventListener("keypress", function(){
    if (started == false){
        console.log("game is started")
        started = true;

        levelUp();
        
    }
});

function gameflesh(btn){
    btn.classList.add("flash");
    setTimeout( function () {
        btn.classList.remove("flash");
    },300);
}
function userflesh(btn){
    btn.classList.add("userflash");
    setTimeout( function () {
        btn.classList.remove("userflash");
    },300);
}
function overGame(){
    body.classList.add("overGame");
    setTimeout( function () {
        body.classList.remove("overGame");
    },300);
    
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor)
    console.log(gameSeq)
    gameflesh(randBtn);
    
}

function chackAns(idx){
    if (userSeq[idx]==gameSeq[idx]){
        if( userSeq.length == gameSeq.length) {
           setTimeout( levelUp,1000)
        }
    } else {
        h2.innerHTML = `Game over! Your Score was <br> <b> ${ level }</b> </br> press any key to start.`;
        overGame();
        gameReset()
    } 
}

function btnPress() {
    let btn = this;
    userflesh(btn)

    userColor = btn.getAttribute("id")
    userSeq.push(userColor);

    chackAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn")
for ( btn of allBtns){
    btn.addEventListener("click",btnPress)
}

function gameReset(){
    started = false;
    level = 0;
    userSeq = []
    gameSeq = []
}
