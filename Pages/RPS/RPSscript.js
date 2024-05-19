let userscore = 0, cpuscore = 0;
const playerImage = document.querySelector("#playerImage");
const computerImage = document.querySelector("#computerImage");
const resultText = document.querySelector("#result");
let player;
let computer;
let result;

function makeChoice(choice) {
  player = choice;
  computerTurn();
  updateImages();
  resultText.textContent = checkWinner();
}

let choicesObject = {
  'rock': {
    'rock': 'draw',
    'scissors': 'win',
    'paper': 'lose'
  },
  'scissors': {
    'rock': 'lose',
    'scissors': 'draw',
    'paper': 'win'
  },
  'paper': {
    'rock': 'win',
    'scissors': 'lose',
    'paper': 'draw'
  }
};

function computerTurn() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  computer = choices[randomIndex];
}

function updateImages() {
  playerImage.src = `images/${player}.png`;
  computerImage.src = `images/${computer}.png`;
}

function checkWinner() {
  if (choicesObject[player][computer] === 'win') {
    return "CONGRATS! YOU WIN!";
  } else if (choicesObject[player][computer] === 'lose') {
    return "SORRY! YOU LOSE!";
  } else {
    return "IT'S A DRAW!";
  }
}
