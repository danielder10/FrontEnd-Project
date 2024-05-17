// Blackjack variables
let deck = [];
let playerHand = [];
let dealerHand = [];
let playerSum = 0;
let dealerSum = 0;
let gameOver = false;

// creating the deck of cards then activates the shuffle function
function createDeck() {
  const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  for (let suit of suits) {
    for (let value of values) {
      deck.push({ value, suit });
    }
  }
  deck = shuffle(deck);
}

// shuffle time
function shuffle(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

// waits for the button of deal 
function deal() {
  if (!gameOver) {
    playerHand.push(deck.pop());
    dealerHand.push(deck.pop());
    playerHand.push(deck.pop());
    dealerHand.push(deck.pop());
    updateHands();
    //these enable and disable the buttons to be clicked 
    document.getElementById('deal').disabled = true;
    document.getElementById('hit').disabled = false;
    document.getElementById('stand').disabled = false;
  }
}

// adds a card using push and pop then updating the hand for the player
function hit() {
  if (!gameOver) {
    playerHand.push(deck.pop());
    updateHands();
    if (playerSum > 21) {
      endGame("Player busts! Dealer wins.");
    }
  }
}

// waits for the button 
function stand() {
  if (!gameOver) {
    while (dealerSum < 17) {
      dealerHand.push(deck.pop());
      updateHands();
    }
    if (dealerSum > 21 || playerSum > dealerSum) {
      endGame("Player wins!");
    } else if (playerSum < dealerSum) {
      endGame("Dealer wins!");
    } else {
      endGame("It's a tie!");
    }
  }
}

function updateHands() {
  playerSum = calculateSum(playerHand);
  dealerSum = calculateSum(dealerHand);
  document.getElementById('Player').innerText = `Player`;
  document.getElementById('Dealer').innerText = `Dealer`;

  // Update the card sum placeholders where it is xx
  document.getElementById('cardSumPlayer').innerText = playerSum;
  document.getElementById('cardSumDealer').innerText = dealerSum;

  // Determine game state and change image classes accordingly
  if (playerSum > 21 || (dealerSum <= 21 && dealerSum > playerSum)) {
      document.querySelector('.knightImage').classList.add('good');
      document.querySelector('.knightImage').classList.remove('ok');
      document.querySelector('.knightImage').classList.remove('bad');
      document.querySelector('.kingImage').classList.add('bad');
      document.querySelector('.kingImage').classList.remove('ok');
      document.querySelector('.kingImage').classList.remove('good');
  } else if (dealerSum > 21 || (playerSum <= 21 && playerSum > dealerSum)) {
      document.querySelector('.knightImage').classList.add('bad');
      document.querySelector('.knightImage').classList.remove('ok');
      document.querySelector('.knightImage').classList.remove('good');
      document.querySelector('.kingImage').classList.add('good');
      document.querySelector('.kingImage').classList.remove('ok');
      document.querySelector('.kingImage').classList.remove('bad');
  } else {
      document.querySelector('.knightImage').classList.add('ok');
      document.querySelector('.knightImage').classList.remove('good');
      document.querySelector('.knightImage').classList.remove('bad');
      document.querySelector('.kingImage').classList.add('ok');
      document.querySelector('.kingImage').classList.remove('good');
      document.querySelector('.kingImage').classList.remove('bad');
  }
}

  

// Function to get value of cards using if else statement to 
function getValue(cardValue) {
    if (cardValue === 'J' || cardValue === 'Q' || cardValue === 'K') {
      return 10;
    } else if (cardValue === 'A') {
      return 1;
    } else {
      return parseInt(cardValue);
    }
  }

// Function to calculate sum of cards
function calculateSum(hand) {
  let sum = 0;
  let hasAce = false;
  for (let card of hand) {
    if (card.value === 'A') {
      hasAce = true;
    }
    sum += getValue(card.value);
    //takes the getValue function and 
  }
  if (hasAce && sum + 10 <= 21) {
    sum += 10;
  }
  return sum;
}

// Function to end game
function endGame(message) {
    gameOver = true;
    document.getElementById('result').innerText = message;
    document.getElementById('deal').disabled = false;
    document.getElementById('hit').disabled = true;
    document.getElementById('stand').disabled = true;
    document.getElementById('playAgain').disabled = false;
}



// Initialize game
createDeck();

// Add event listeners from the ID to the function
document.getElementById('deal').addEventListener('click', deal);
document.getElementById('hit').addEventListener('click', hit);
document.getElementById('stand').addEventListener('click', stand);

// Function to reset the game
function resetGame() {
    //clear the hands of the plater and the dealer
    playerHand = [];
    dealerHand = [];
    playerSum = 0;
    dealerSum = 0;
    gameOver = false;
    //quick lil reset
    document.getElementById('result').innerText = '';
    document.getElementById('deal').disabled = false;
    document.getElementById('hit').disabled = true;
    document.getElementById('stand').disabled = true;
    document.getElementById('playAgain').disabled = true;
    document.getElementById('cardSumPlayer').innerText = 'xx';
    document.getElementById('cardSumDealer').innerText = 'hi';
  }
  
  // Add event listener for Play Again button
  document.getElementById('playAgain').addEventListener('click', resetGame);
  
//function to reload the page
function resetGame() {
  // Reload the page
  location.reload();
}