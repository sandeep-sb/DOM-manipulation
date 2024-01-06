const form = document.querySelector("form");
const submit = document.querySelector("#subt");
const userInput = document.getElementById("guessField");
const previousGuess = document.querySelector('.guesses');

const lowOrHi = document.querySelector('.lowOrHi');
const randomNumber = randomNumberGenerator();

function randomNumberGenerator(){
    return parseInt(Math.random() * 100 + 1);
}

submit.addEventListener('click', function(e){
    e.preventDefault();

    const guess = parseInt(userInput.value);
    console.log(guess);

    const remainingNumberOfGuess = document.querySelector('.lastResult');
    let remainingGuesses = parseInt(remainingNumberOfGuess.innerText)
    console.log(remainingGuesses)

    // validation
    if(guess === "" || isNaN(guess) || guess < 1){
        alert("Please add a valid number");
    }

    // check
    if(remainingGuesses > 0){
        if(guess === randomNumber){
            lowOrHi.innerText = `Correct Guess`;
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
        lowOrHi.innerText = `Game Over`;
    }

})