//5 Random generators: 1 for random.number, 4 crystals

// Computer picks random number (19-120)
// Computer picks random number for crystals (1-12)
// After pick # for crystals, give it a variable
// User clicks on crystal,
    // Adds random # to score counter
    // If score === random-number:
        // Win++
        // Game restarts
    // If score > random.number:
        // Losses++
        // Game restarts

// Need function sum() to add crystal #s together


// ---------------------------------------------------------------------------



// Setting variable for randomNumber so computer will generate a random number
var randomNumber = Math.floor((Math.random() * 102) + 19);
// Set randomNumber to console to make sure it's working
console.log(randomNumber);


// Setting variables equal to 0
var wins = 0;
var losses = 0;


$(document).ready(function() {
    // appended randomNumber to the #number empty div
    $("#number").append(randomNumber);

    // appending wins and losses to scoreboard
    $("#wins").append("Wins: " + wins);
    $("#losses").append("Losses: " + losses);
});