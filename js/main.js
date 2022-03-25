// Main variables 
let user = prompt('Type Your Name And Enjoy !!' , 'USER') ;
let player = document.querySelector('.player') ;
let computer = document.querySelector('.computer') ;
let paper = document.getElementById('paper') ;
let rock = document.getElementById('rock') ;
let scissors = document.getElementById('scissors') ;
let result = document.querySelector('.result') ;
let useraction = document.getElementById('useraction') ;
let compuaction = document.getElementById('compuaction') ;
let again = document.getElementById('again') ;
let winnerDiv = document.querySelector('.winner') ;
let name = document.getElementById('name') ;
// Result actions 
let random ;
let userAction ;
let computerAction ;
let userScore = document.getElementById('userscore') ;
let compScore = document.getElementById('compscore') ;
let winscore = document.getElementById('winscore') ;
let losscore = document.getElementById('losscore') ;
let winner = document.getElementById('winner') ;
let counterUser = 0 ;
let counterComp = 0 ;
let round ;


name.innerHTML = user.toUpperCase().trim()  ;

paper.onclick=_=>{
    random = Math.random() ;
    userAction = 'paper' ;
    getComputerAction() ;
    showResult() ;
}

rock.onclick=_=>{
    random = Math.random() ;
    userAction = 'rock' ;
    getComputerAction() ;
    showResult() ;
}

scissors.onclick=_=>{
    random = Math.random() ;
    userAction = 'scissors' ;
    getComputerAction() ;
    showResult() ;
}

again.onclick=_=>{
    let confirm = window.confirm('are you shure') ;
    if (confirm){
        location.reload() ;
    }
}

// Start game logic :


function getComputerAction(){
    if (random < 0.33) {
        computerAction = 'paper' ;
    }

    else if (random >= 0.33 && random < 0.66) {
        computerAction = 'rock' ;
    }

    else if (random >= 0.66) {
        computerAction = 'scissors' ;
    }
}



function showResult(){
    result.classList.add('show') ;
    userActions() ;
    computerActions() ;
    getTheWinner() ;
    round = setTimeout(playAgain , 2000) ;
    endGame() ;
}


function userActions(){
    if (userAction === 'paper' ){
        useraction.innerHTML = '<i class="fas fa-hand-paper"></i>' ;
    }

    else if (userAction === 'rock' ){
        useraction.innerHTML = '<i class="fas fa-hand-rock"></i>' ;
    }

    else if (userAction === 'scissors'){
        useraction.innerHTML = '<i class="fas fa-hand-scissors"></i>' ;
    }
}

function computerActions(){
    if (computerAction === 'paper' ){
        compuaction.innerHTML = '<i class="fas fa-hand-paper"></i>' ;
    }

    else if (computerAction === 'rock' ){
        compuaction.innerHTML = '<i class="fas fa-hand-rock"></i>' ;
    }

    else if (computerAction === 'scissors'){
        compuaction.innerHTML = '<i class="fas fa-hand-scissors"></i>' ;
    }
}

function getTheWinner(){
    if (userAction === computerAction) {
        player.style.background = 'blueviolet' ;
        player.style.color = 'white' ;
        computer.style.background = 'blueviolet' ;
        computer.style.color = 'white' ;
    }

    else if (userAction === 'scissors' && computerAction === 'paper' || userAction === 'rock' && computerAction === 'scissors' || userAction === 'paper' && computerAction === 'rock' )
    {
        counterUser++ ;
        player.style.background = 'green' ;
        player.style.color = 'white' ;
        computer.style.background = '#DDD' ;
        computer.style.color = 'black' ;
        userScore.innerHTML = counterUser ;
    }

    // else if (computerAction === 'scissors' && userAction === 'paper' || computerAction === 'rock' && userAction === 'scissors' || computerAction === 'paper' && userAction === 'rock' )
    else
    {
        counterComp++ ;
        player.style.background = '#DDD' ;
        player.style.color = 'black' ;
        computer.style.background = 'green' ;
        computer.style.color = 'white' ;
        compScore.innerHTML = counterComp ;
    }
}

function playAgain(){
    result.classList.remove('show') ;
}


function endGame(){
    if (counterComp === 10 || counterUser === 10) {
        winnerDiv.style.display = 'flex' ;
        clearTimeout(round) ;
        if (counterComp === 10) {
            winner.innerHTML = 'Computer' ;
            winscore.innerHTML = 10 ;
            losscore.innerHTML = ` ${counterUser} ` ;
        }

        else if (counterUser === 10) {
            winner.innerHTML = ` ${user} ` ;
            winscore.innerHTML = 10 ;
            losscore.innerHTML = ` ${counterComp} ` ;
        }

    }
}