const scorePlayer = document.querySelector('.scorePlayer');
const scoreComputer =  document.querySelector('.scoreComputer');
const computerDisplay = document.getElementById("computer");
const playerDisplay = document.getElementById("player");

const result = document.querySelector(".resultPoint");
const button = document.querySelectorAll(".button");

button.forEach((btn) => {
    btn.addEventListener("click", () => {
        // console.log(btn.innerHTML);        
        if(btn.innerHTML === 'rock') {
            playerDisplay.innerHTML = 'rock';
        }else if (btn.innerHTML === 'paper') {
            playerDisplay.innerHTML = 'paper';
        }else {
            playerDisplay.innerHTML = 'scissors';
        }
        waitingPickComputer();
    computerDisplay.innerHTML = '';
    result.innerHTML = '';
    })
})

function pickComputer() {
    let computer = Math.random();
    console.log(computer);
    if (computer > 0 && computer < 1/3) {
        computerDisplay.innerHTML = 'rock'
    }else if (computer > 1/3 && computer < 2/3) {
        computerDisplay.innerHTML = 'paper'
    }else if (computer > 2/3 && computer < 1) {
        computerDisplay.innerHTML = 'scissors'
    }

}


function matchResult() {
    if(playerDisplay.innerHTML == 'rock') {

        if(computerDisplay.innerHTML == 'rock') {
            // console.log('draw');
            result.innerHTML = 'draw'
        }else if(computerDisplay.innerHTML == 'paper') {
            // console.log('you Win');
            result.innerHTML = 'You Lose';
        }else if(computerDisplay.innerHTML == 'scissors'){
            // console.log('you Lose');
            result.innerHTML = 'You Win'
        }

    }else if(playerDisplay.innerHTML == 'paper') {

        if(computerDisplay.innerHTML == 'rock') {
           // console.log('draw');
           result.innerHTML = 'You Win'
       }else if(computerDisplay.innerHTML == 'paper') {
           // console.log('you Win');
           result.innerHTML = 'draw';
       }else if(computerDisplay.innerHTML == 'scissors'){
           // console.log('you Lose');
           result.innerHTML = 'You Lose'
       }
       
   }else if(playerDisplay.innerHTML == 'scissors') {

        if(computerDisplay.innerHTML == 'rock') {
           // console.log('draw');
           result.innerHTML = 'You Lose'
       }else if(computerDisplay.innerHTML == 'paper') {
           // console.log('you Win');
           result.innerHTML = 'You Win';
       }else if(computerDisplay.innerHTML == 'scissors'){
           // console.log('you Lose');
           result.innerHTML = 'draw'
       }
       
   }

    }




function waitingPickComputer() {
    setTimeout(() => {
        pickComputer();
        matchResult();

    },500)
}

const startGame = document.querySelector('.startGame');
const container = document.querySelector(".container")
startGame.addEventListener("click", () => {
    startGame.classList.toggle("hidden");
    container.classList.toggle("hidden");

})