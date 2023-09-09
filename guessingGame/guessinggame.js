let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");

let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

function checkGuess() {
    let guessedNumber = parseInt(userInput.value)
    if (guessedNumber > randomNumber) {
        gameResult.textContent = "Too High! Try again.";
        gameResult.style.backgroundColor = "Red";
    } else if (guessedNumber < randomNumber) {
        gameResult.textContent = "Too Low! Try again.";
        gameResult.style.backgroundColor = "Red";
    } else if (guessedNumber === randomNumber) {
        gameResult.textContent = "Congrulations ! you got it right";
        gameResult.style.backgroundColor = "Green";
    } else {
        gameResult.textContent = "Provid a valid input";
        gameResult.style.backgroundColor = "Red";

    }
}