// estblish the first array, score, etc
var targetNumber = randomCompInt(50, 99);
var clickCounter = 0;
var crystalValues = [10, 15, 5, 1];
var maWins = 0;
var maLosses = 0;

// assign each crystal a value
var crystalOnePlace = randomCompInt(0, 3);
var crystal1Val = crystalValues[crystalOnePlace];
crystalValues.splice(crystalOnePlace, 1);

console.log("Cystal 1's value: " + crystal1Val);

var crystalTwoPlace = randomCompInt(0, 2);
var crystal2Val = crystalValues[crystalTwoPlace];
crystalValues.splice(crystalTwoPlace, 1);

console.log("Crystal 2's value: " + crystal2Val);

var crystalThreePlace = randomCompInt(0, 1);
var crystal3Val = crystalValues[crystalThreePlace];
crystalValues.splice(crystalThreePlace, 1);

console.log("Crystal 3's value: " + crystal3Val);

var crystal4Val = crystalValues[0];

console.log("Crystal 4's value: " + crystal4Val);

// This reassigns Crystals values upon reset 
function newCrystals() {
    crystalValues = [10, 15, 5, 1];

    crystalOnePlace = randomCompInt(0, 3);
    crystal1Val = crystalValues[crystalOnePlace];
    crystalValues.splice(crystalOnePlace, 1);

    console.log("Cystal 1's value: " + crystal1Val);

    crystalTwoPlace = randomCompInt(0, 2);
    crystal2Val = crystalValues[crystalTwoPlace];
    crystalValues.splice(crystalTwoPlace, 1);

    console.log("Crystal 2's value: " + crystal2Val);

    crystalThreePlace = randomCompInt(0, 1);
    crystal3Val = crystalValues[crystalThreePlace];
    crystalValues.splice(crystalThreePlace, 1);

    console.log("Crystal 3's value: " + crystal3Val);

    crystal4Val = crystalValues[0];

    console.log("Crystal 4's value: " + crystal4Val);
}

// this resets the game when you win or lose
function reset() {
    clickCounter = 0;
    targetNumber = randomCompInt(50, 99);
    $("#number-to-guess").text(targetNumber);
    $("#winTracker").text(maWins);
    $("#lossTracker").text(maLosses);
    newCrystals();
}

// This generates the random number to match as well as the crystal value assignment
function randomCompInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

// basic win/lose functions
function winLose() {
    if (clickCounter === targetNumber) {
        alert("You Win!");
        maWins++;
        reset();
    }
    else if (clickCounter >= targetNumber) {
        alert("You Lose!");
        maLosses++;
        reset();
    }
}

// this is what happens when you select the crystals 
$("#crystal1").on("click", function () {
    clickCounter += crystal1Val;
    winLose();
    $("#whatIGot").text(clickCounter);
})
$("#crystal2").on("click", function () {
    clickCounter += crystal2Val;
    winLose();
    $("#whatIGot").text(clickCounter);
})
$("#crystal3").on("click", function () {
    clickCounter += crystal3Val;
    winLose();
    $("#whatIGot").text(clickCounter);
})
$("#crystal4").on("click", function () {
    clickCounter += crystal4Val;
    winLose();
    $("#whatIGot").text(clickCounter);
})

// pushes changes to the HTML doc
$("#number-to-guess").text(targetNumber);
$("#whatIGot").text(clickCounter);
$("#winTracker").text(maWins);
$("#lossTracker").text(maLosses);