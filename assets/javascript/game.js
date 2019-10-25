var letters = ["a", "b", "c"];

// This array will hold what we guess
var guessedLetters = [];

// This variable will be randomly assigned one of the three letters
var letterToGuess = null;

// This is what we'll use to count down
var guessesLeft = 9;

// This is the counter for wins/losses
var wins = 0;
var losses = 0;

// Below we created three functions to updateGuesses, updateGuessesLeft, and updateGuessesSoFar


var updateGuessesLeft = function() {
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
  };

  var updateLetterToGuess = function() {
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
  };

  var updateGuessesSoFar = function() {
    document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
  };



// Function will be called when we reset everything
var reset = function() {
    guessesLeft = 9;
    guessedLetters = [];
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
  };

//  event function

document.onkeyup = function (event) {
    var userGuess = event.key;
    left--;
    yourGuessesSoFar.push(userGuess);
    soFar();
    guessesLeft();
    if (left > 0) {
        if (userGuess == letter) {
            wins++;
            document.getElementById("wins").innerHTML = "Wins:" + wins;
            newGame();
        }
    } else if (left == 0) {
        losses++;
        document.getElementById("losses").innerHTML = "Losses:" + losses;
        newGame();
    }
};









