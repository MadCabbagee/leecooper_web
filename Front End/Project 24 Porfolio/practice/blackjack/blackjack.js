let player = {
  name: "Lee",
  chips: 200,
};

let cards = []; //array - ordered list of items (starts at 0)
let firstCard = 10;
let secondCard = 3;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  // if 1 -> return 11
  // if 11-13 -> return 10
  let randomNumber = Math.floor(Math.random() * 13) + 1; //returns random number 1-13
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  //let firstCard = getRandomCard();
  //let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  //renders out the first and second card
  //cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Woohoo! you've got blackjack!";
    hasBlackJack = true;
  } else {
    message = "You are out of the game!";
    isAlive = false;
  }
  // display the messageel using messageel.textcontent
  messageEl.textContent = message;
}

function newCard() {
  // only allow the player to get a new card if she IS alive and does NOT have BlackJack
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    console.log(card);
    renderGame();
  }
}
