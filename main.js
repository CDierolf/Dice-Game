//Global Variables
var diceArr = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

// Dice positions in array to determine the winner
var diceOnePosition;
var diceTwoPosition;

//ENUMS
var outcomeEnum = {
    DRAW: 1,
    PLAYER1: 2,
    PLAYER2: 3
};

// Methods
//Returns a random number between 0 and 5
function getRandomNum() {
    return Math.floor(Math.random() * 5);
}

// Set the global variable diceNPositions
function setPositions() {
    diceOnePosition = getRandomNum();
    diceTwoPosition = getRandomNum();
}

//Set the image global variables diceNImg using the diceNPositions
function setImages() {
    document.querySelector("#dice1").setAttribute("src", "images/" + diceArr[diceOnePosition]);
    document.querySelector("#dice2").setAttribute("src", "images/" + diceArr[diceTwoPosition]);
}

// Roll the dice and set the outcome.
// Calls set Positions to set the global img position variable
// Then calls setImages to set the src attribute on the dice images.
// Then determines the winner based on comparison between the two positions.
function rollDice() {
    setPositions();
    setImages();
    var outcome;

    if (diceOnePosition === diceTwoPosition) {
        outcome = outcomeEnum.DRAW;
    }
    else if (diceOnePosition > diceTwoPosition) {
        outcome = outcomeEnum.PLAYER1
    }
    else if (diceOnePosition < diceTwoPosition) {
        outcome = outcomeEnum.PLAYER2
    }

    return outcome;
}

// rolls the dice and interprets the winner.
function playGame() {
    var winner = rollDice();

    if (winner === 1) {
        document.querySelector("h1").innerHTML = "IT'S A DRAW!";
    }
    else if (winner === 2) {
        document.querySelector("h1").innerHTML = "PLAYER 1 WINS!";
    }
    else if (winner === 3) {
        document.querySelector("h1").innerHTML = "PLAYER 2 WINS!";
    }
}



