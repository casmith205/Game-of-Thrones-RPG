
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
var playerChoseChar = false;
var characterChosen;
var defenderExists = false;
var defenderChosen;
var winBattle = false;
var defeated = false;

var jonSnow = { 
    name: "Jon Snow",
    healthPoints: 100,
    attackPower: 30,
    counterAttackPower: 30,
    imgUrl: "assets/images/jonSnow.jpg",
    healthId : "#jonHealth",
    buttonId : "#jonSnow-button"

};

var nightKing = {
    name: "The Night King",
    healthPoints: 110,
    attackPower: 50,
    counterAttackPower:40,
    imgUrl: "assets/images/nightKing.jpg",
    healthId : "#nightKingHealth",
    buttonId : "#nightKing-button",
};

var hound = {
    name: "The Hound",
    healthPoints: 90,
    attackPower: 10,
    counterAttackPower: 5,
    imgUrl: "assets/images/hound.jpg",
    healthId : "#houndHealth",
    buttonId : "#hound-button"

};

var cersei = {
    name: "Cersei Lannister",
    healthPoints: 80,
    attackPower: 10,
    counterAttackPower: 15,
    imgUrl: "assets/images/cersei.jpg",
    healthId : "#cerseiHealth",
    buttonId : "#cersei-button"

};

var characters = [jonSnow, nightKing, hound, cersei];
console.log(characters);

var enemyCount = (characters.length - 1); 
console.log(enemyCount);

// Choosing a character
    // If a button is clicked in the characters div....
    $(".characters").on("click", ".buttons", function(x){
        // If the player has already chosen a character, return
        if(playerChoseChar){return;};
        // Setting a variable to detect the ID of the clicked character
        var clickedCharacter = "#" + x.currentTarget.id;
        for(i=0; i<characters.length; i++) {
            // If the clicked character does not equal the current ID, append the current ID to "enemies"
            if(clickedCharacter !== characters[i].buttonId){
            $(characters[i].buttonId).appendTo(".enemies");
            // If the clicked character does equal the current ID, set that var equal to characterChosen
            } else {
                characterChosen = characters[i];
                playerChoseChar = true;
            };
        };
    });

// Choosing a defender
    // If a button is clicked in the enemies div...
    $(".enemies").on("click", ".buttons", function(x){
        // If a defender already exists, return
        if(defenderExists){return;};
        // Setting a variable to detect the ID of the clicked character
        var clickedDefender = "#" + x.currentTarget.id;
        for(i=0; i<characters.length; i++) {
            // If the clicked character equals the current ID, appedn to defender, define defenderChosen, and change defenderExists to true
            if(clickedDefender == characters[i].buttonId){
                $(characters[i].buttonId).appendTo(".defender");
                defenderChosen = characters[i];
                defenderExists = true;
            };
        };
    });

$("#attack-btn").on("click", function(){
    attack(characterChosen, defenderChosen);
    
});

});

// DEFINING FUNCTIONS
function attack (characterChosen, defenderChosen) {
    defenderChosen.healthPoints -= characterChosen.attackPower;
    characterChosen.healthPoints -= defenderChosen.counterAttackPower;
    $(characterChosen.healthId).html(characterChosen.healthPoints);
    $(defenderChosen.healthId).html(defenderChosen.healthPoints);
}