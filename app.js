
// phil welsby - 13 aug 2021 - example of how to use switch
let playerScore = 0;

/*const playerDice = document.getElementById("playerDice");*/
const playerScoreboard = document.getElementById("scoreboard");
const rollButton = document.getElementById("rollButton");
const playerHeader = document.getElementById("playerHeader");
const dice = document.getElementById("dice");

rollButton.addEventListener("click", ()=> {
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log(diceRoll)
    if (diceRoll === 1) {
        gameOver("Game Over!");
    }

    playerScore += diceRoll;
    scoreboard.textContent = playerScore;
    switch(diceRoll) {
        case 1: dice.src="images/1.png"; break;
        case 2: dice.src="images/2.png"; break;
        case 3: dice.src="images/3.png"; break;
        case 4: dice.src="images/4.png"; break;
        case 5: dice.src="images/5.png"; break;
        case 6: dice.src="images/6.png"; break;
    }
    // playerDice.textContent = diceRoll;
    if (playerScore >= 20) {
        gameOver("You Won!");
    }
});

//Game over function
function gameOver(message) {
    playerHeader.textContent = message;
   
}
