// creating first random number
var randomNumber1 = Math.floor(Math.random() *6) + 1;
var newNumber1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", newNumber1);

// creating second random number
var randomNumber2 = Math.floor(Math.random() *6) + 1;
var newNumber2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", newNumber2);


// displaying the winner
//<i class="fas fa-pennant"></i>
if(randomNumber1 > randomNumber2) {
    document.querySelector(".game-heading").innerHTML = '🚩 Player 1 wins!';
} else if(randomNumber1 < randomNumber2) {
    document.querySelector(".game-heading").innerHTML = 'Player 2 wins! 🚩';
} else {
    document.querySelector(".game-heading").innerHTML = "Draw!";
}