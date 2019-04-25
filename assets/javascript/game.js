

// Array of all options
var computerChoise = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "z"];
var wins = 0;
var losses = 0;
var left = 9;
var yourGuessesSoFar = [];
var letter;

// randon choise of computer choise of letter
var computerGuess = function () {
    letter = computerChoise[Math.floor(Math.random() *
        computerChoise.length)];

}

var soFar = function () {
    document.getElementById("guess-so-far").innerHTML = "Your Guesses so far: " + yourGuessesSoFar.join(",");
};


var guessesLeft = function () {
    document.getElementById("left").innerHTML = " Guesses Left: " + left;
};


var newGame = function () {
    left = 9;
    computerGuess()
    soFar()
    guessesLeft()
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









