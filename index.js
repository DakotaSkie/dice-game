function getRandomDiceImage() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var imageSource = "images/dice" + randomNumber1 + ".png";
  return imageSource;
}

var p1Score = getRandomDiceImage();
var p2Score = getRandomDiceImage();

document.querySelectorAll("img")[0].setAttribute("src", p1Score);
document.querySelectorAll("img")[1].setAttribute("src", p2Score);

var gameWinner;

if (p1Score === p2Score) {
  gameWinner = "Draw";
} else if (p1Score > p2Score) {
  gameWinner = "Player 1 Wins!";
} else {
  gameWinner = "Player 2 Wins!";
}

document.querySelector("h1").innerText = gameWinner;
