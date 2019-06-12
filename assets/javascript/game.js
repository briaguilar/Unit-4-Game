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



// Setting global variable for randomNumber so computer will generate a random number
var randomNumber = Math.floor((Math.random() * 102) + 19);
// Set randomNumber to console to make sure it's working
console.log(randomNumber);


// Setting variables equal to 0
var wins = 0;
var losses = 0;
var score = 0;


// Setting variables to crystal images
var crystal1 = $("#diamond");
var crystal2 = $("#blueCrystal");
var crystal3 = $("#greenCrystal");
var crystal4 = $("#yellowCrystal");


// Setting a global variable for crystal's random numbers
//var crystalRandom = Math.floor((Math.random() * 13) + 1)


$(document).ready(function () {
    // Variables


    // appended randomNumber to the #number empty div
    $("#number").append(randomNumber);

    // appending wins and losses to #scoreboard
    $("#wins").append("Wins: " + wins);
    $("#losses").append("Losses: " + losses);
    // appending score to #score
    $("#score").text(score);



    // Crystal click functions

    // Setting one random number per crystal image
    var crystal1Random = Math.floor((Math.random() * 13) + 1) //diamond
    console.log("Diamond random number: " + crystal1Random);
    var crystal2Random = Math.floor((Math.random() * 13) + 1) //blue crystal
    console.log("Blue crystal random number: " + crystal2Random);
    var crystal3Random = Math.floor((Math.random() * 13) + 1) //green crystal
    console.log("Green crystal random number: " + crystal3Random);
    var crystal4Random = Math.floor((Math.random() * 13) + 1) //yellow crystal
    console.log("Yellow crystal random number: " + crystal4Random);

    // When you click on crystal...
        // add # to score
        // in order to do that:
        // example:
        // $("#diamond").click(function() {
            // cystal1Random.val() ; 
        // })


    // Setting an onclick method for the diamond crystal image
    $("#diamond").click(function () {
        // Pushing crystalRandom number to #score
        
    });
    $("#blueCrystal").click(function() {
        
        
    });
    $("#greenCrystal").click(function() {
        $("#score").text(crystal3Random);
    });
    $("#yellowCrystal").click(function() {
        $("#score").text(crystal4Random);
    });


    // creating global function for resetting a new game
    function newGame() {
        $("#number").append(randomNumber);
        $("#diamond").click(function () {
            // Pushing crystalRandom number to #score
            score = $("#score").text(crystal1Random);
        });
        $("#blueCrystal").click(function() {
            score = $("#score").text(crystal2Random);
        });
        $("#greenCrystal").click(function() {
            $("#score").text(crystal3Random);
        });
        $("#yellowCrystal").click(function() {
            $("#score").text(crystal4Random);
        });
    }


    // Rules for the game
    if (score === randomNumber) {
        newGame();
        wins++;
    }
    else if (score > randomNumber) {
        newGame();
        losses++;
    }

    
});