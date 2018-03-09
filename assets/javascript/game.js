// When the game starts, the player will choose a character by clicking on the fighter's picture. 
// The player will fight as that character for the rest of the game.
        // The player must then defeat all of the remaining fighters. 
        // Enemies should be moved to a different area of the screen.
// The player chooses an opponent by clicking on an enemy's picture.
// Once the player selects an opponent, that enemy is moved to a defender area.
// The player will now be able to click the attack button.
// Whenever the player clicks attack, their character damages the defender. 
// The opponent will lose HP (health points). These points are displayed at the bottom of the defender's picture. 
// The opponent character will instantly counter the attack. 
// When that happens, the player's character will lose some of their HP. 
// These points are shown at the bottom of the player character's picture.
// The player will keep hitting the attack button in an effort to defeat their opponent.
// When the defender's HP is reduced to zero or below, remove the enemy from the defender area. 
// The player character can now choose a new opponent.
// The player wins the game by defeating all enemy characters. 
// The player loses the game the game if their character's HP falls to zero or below.

$(document).ready(function() {
// DEFINING VARIABLES
var character;
var characterChosen;
var enemyChosen = false;
var opponent;
var defeated = false;

var jonSnow = { 
    name: "Jon Snow",
    healthPoints: 100,
    attackPower: 90,
    counterAttackPower: 50,
    imgUrl: "assets/images/jonSnow.jpg"
};

var nightKing = {
    name: "The Night King",
    healthPoints: 110,
    attackPower: 100,
    counterAttackPower:100,
    imgUrl: "assets/images/nightKing.jpg"
};

var hound = {
    name: "The Hound",
    healthPoints: 90,
    attackPower: 80,
    counterAttackPower: 80,
    imgUrl: "assets/images/hound.jpg"

};

var cersei = {
    name: "Cersei Lannister",
    healthPoints: 80,
    attackPower: 70,
    counterAttackPower: 60,
    imgUrl: "assets/images/cersei.jpg"

};

var characters = [jonSnow, nightKing, hound, cersei];
console.log(characters);

var enemyCount = (characters.length - 1); 
console.log(enemyCount);
// ON CLICK

// What happens when you click jon-Snow button in Characters
$(".characters").on("click", "#jonSnow-button", function(){
    $("#nightKing-button").appendTo(".enemies");
    $("#hound-button").appendTo(".enemies");
    $("#cersei-button").appendTo(".enemies");
});
    

// What happens when you click night-King button
$(".characters").on("click", "#nightKing-button", function(){
        $("#jonSnow-button").appendTo(".enemies");
        $("#hound-button").appendTo(".enemies");
        $("#cersei-button").appendTo(".enemies");
        
});
    
// What happens when you click hound button
$(".characters").on("click", "#hound-button", function(){
        $("#jonSnow-button").appendTo(".enemies");
        $("#nightKing-button").appendTo(".enemies");
        $("#cersei-button").appendTo(".enemies");
    
});
    
// What happens when you click cersei button
$(".characters").on("click", "#cersei-button", function(){
        $("#jonSnow-button").appendTo(".enemies");
        $("#nightKing-button").appendTo(".enemies");
        $("#hound-button").appendTo(".enemies");  
});

});

// DEFINING FUNCTIONS
function pickCharcter (a, b, c, d){
    $(b).appendTo(".enemies");
    $(c).appendTo(".enemies");
    $(d).appendTo(".enemies");
};

