let hands = ["rock", "paper", "scissor"];

//create a functio that returns a random item from the array

function getHand() {
  let randomIndex = Math.floor(Math.random() * 3); // 0 - 2
  return hands[randomIndex];
}

console.log(getHand());
