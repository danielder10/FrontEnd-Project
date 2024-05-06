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

// Function to update hands
function updateHands() {
  playerSum = calculateSum(playerHand);
  dealerSum = calculateSum(dealerHand);
  document.getElementById('Player').innerText = `Player (${playerSum})`;
  document.getElementById('Dealer').innerText = `Dealer (${dealerSum})`;
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
  }
  if (hasAce && sum + 10 <= 21) {
    sum += 10;
  }
  return sum;
}

// Function to get value of cards
function getValue(cardValue) {
  if (cardValue === 'J' || cardValue === 'Q' || cardValue === 'K') {
    return 10;
  } else if (cardValue === 'A') {
    return 1;
  } else {
    return parseInt(cardValue);
  }
}

// Function to end game
function endGame(message) {
  gameOver = true;
  document.getElementById('result').innerText = message;
  document.getElementById('deal').disabled = false;
  document.getElementById('hit').disabled = true;
  document.getElementById('stand').disabled = true;
}

// Initialize game
createDeck();

// Add event listeners
document.getElementById('deal').addEventListener('click', deal);
document.getElementById('hit').addEventListener('click', hit);
document.getElementById('stand').addEventListener('click', stand);
