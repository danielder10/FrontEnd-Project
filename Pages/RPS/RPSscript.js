let userscore = 0, cpuscore = 0;
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

  player = button.textContent;
  computerTurn();
  playerText.textContent = `Player: ${player}`;
  computerText.textContent = `Computer: ${computer}`;
  resultText.textContent = checkWinner();
}));
let choicesObject = {
  'rock': {
    'rock': 'draw',
    'scissor': 'win',
    'paper': 'lose'
  },
  'scissor': {
    'rock': 'lose',
    'scissor': 'draw',
    'paper': 'win'
  },
  'paper': {
    'rock': 'win',
    'scissor': 'lose',
    'paper': 'draw'
  }
}
function displayRock() {
  document.getElementById("playerText").innerHTML = "Player: Rock";
}
function displayPaper() {
  document.getElementById("playerText").innerHTML = "Player: Paper";
}
function displayScissors() {
  document.getElementById("playerText").innerHTML = "Player: Scissors";
}

function checker(input) {
  var choices = ["rock", "paper", "scissor"];
  var num = Math.floor(Math.random() * 3);

  if (num == 0) {
    document.getElementById("computerText").innerHTML = "Computer: Rock";
  }
  else if (num == 1) {
    document.getElementById("computerText").innerHTML = "Computer: Paper";
  }
  else if (num == 2) {
    document.getElementById("computerText").innerHTML = "Computer: Scissors";
  }

  let computerChoice = choices[num];
  let result

  switch (choicesObject[input][computerChoice]) {
    case 'win':
      result = "CONGRATS! YOU WIN!";
      break;
    case 'lose':
      result = "SORRY! YOU LOSE!";
      break;
    default:
      result = "IT'S A DRAW!";
      break;
  }
  console.log(result);
  document.getElementById('result').textContent = result;
}
