let randomNumber = parseInt(Math.random()*100+1)

const userInput = document.querySelector('#number')
const submit = document.querySelector('#submit')
const guessSlots = document.querySelector('.guesses')
const remainingGuesses = document.querySelector('.lastResult')
const loOrHi = document.querySelector('.loOrHigh')
const result = document.querySelector('.result')

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        // console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert(`Enter a Valid Number`)
    }
    else if (guess < 1) {
        alert(`${guess} is Less Than 1`)
    } else if(guess > 100){
        alert(`${guess} is Greater than 100`)  
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`GameOver, The Num Was ${guess}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You Won - ${guess}`)
        endGame()
    }
    else if (guess > randomNumber) {
        // alert(`${guess} is Low`)
        displayMessage(`Try a Lesser Number`)
    } 
    else if(guess < randomNumber){
        // alert(`${guess} is High`)
        displayMessage(`Try a Greater Number`)
    }

}

function displayGuess(guess){
    userInput.value = ''
    guessSlots.innerHTML += `${guess},`
    numGuess ++
    remainingGuesses.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    loOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 class="newGame">Start new Game</h2>`;
    result.appendChild(p);
    playGame = false;
    startOver();
}

function startOver(){
    const newGameButton = document.querySelector('.newGame')
    newGameButton.addEventListener('click',(e)=>{
        userInput.removeAttribute('disabled');result.removeChild(p)
        numGuess = 1
        prevGuess = []
        playGame = true
        guessSlots.innerHTML = ''
        randomNumber = parseInt(Math.random()*100+1)
        
    })

}
