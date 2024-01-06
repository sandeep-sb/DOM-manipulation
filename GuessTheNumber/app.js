const form = document.querySelector("form");
const submit = document.querySelector("#subt");
const userInput = document.getElementById("guessField");
const previousGuess = document.querySelector('.guesses');
const startOver = document.querySelector('.resultParas');
const remainingNumberOfGuess = document.querySelector('.lastResult');

const p = document.createElement("p");

const lowOrHi = document.querySelector('.lowOrHi');
const randomNumber = randomNumberGenerator();

function randomNumberGenerator(){
    return parseInt(Math.random() * 100 + 1);
}

submit.addEventListener('click', function(e){
    e.preventDefault();

    const guess = parseInt(userInput.value);
    console.log(guess);

    
    let remainingGuesses = parseInt(remainingNumberOfGuess.innerText)
    console.log(remainingGuesses)

    // validation
    if(guess === "" || isNaN(guess) || guess < 1 || guess > 100){
        alert("Please add a valid number");
    }

    // check
    if(remainingGuesses > 7){
        if(guess === randomNumber){
            lowOrHi.innerText = `Correct Guess`;
            endGame(randomNumber);
        }
        else if (guess > randomNumber){
            lowOrHi.innerText = `Lower than ${guess}`;
            remainingNumberOfGuess.innerText = remainingGuesses-1;
            console.log(parseInt(remainingNumberOfGuess.innerText))
            
        }
        else{
            lowOrHi.innerText = `Higher than ${guess}`;
            remainingNumberOfGuess.innerText = remainingGuesses-1;
            console.log(parseInt(remainingNumberOfGuess.innerText))
        }
        console.log("remaining guesses: " + remainingGuesses)

        userInput.value = "";
        previousGuess.innerHTML += `${guess}, `;

    }
    else {
        endGame(randomNumber);
    }

})

function endGame(correctGuess){
    lowOrHi.innerText = `Game Over. Correct Guess was ${correctGuess}`;
    userInput.innerHTML = "";
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h2 class="startbtn">Start Over</h2>`
    startOver.appendChild(p);
    newGame();
}


function newGame(){
    userInput.removeAttribute("disabled");
    startOver.addEventListener("click", function(){
        previousGuess.innerHTML = "";
        remainingNumberOfGuess.innerHTML = 10;
        lowOrHi.innerHTML = "";
    })
}