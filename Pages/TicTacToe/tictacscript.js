const cells = document.querySelectorAll('[data-cell]');
const gameBoard = document.getElementById('gameBoard');
const winningMessageElement = document.getElementById('winningMessage');
const winningMessageTextElement = document.getElementById('winningMessageText');
const restartButton = document.getElementById('restartButton');
const currentTurnElement = document.getElementById('currentTurn');
const X_CLASS = 'x';
const O_CLASS = 'o';
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let oTurn;

function goBack() {
    window.location.href = "../Home Page/index.html";
}

function startGame() {
    document.getElementById('overlay').style.display = 'none';
    playSound('game-start.mp3');
    initGame();
}

function restartGame() {
    playSound('game-start.mp3');
    initGame();
}

function playSound(filename) {
    const audio = new Audio(`../TicTacToe/sounds/${filename}`);
    audio.play();
}

window.onload = function() {
    document.getElementById('overlay').style.display = 'flex';
}

function initGame() {
    oTurn = false;
    updateTurnIndicator();
    cells.forEach(cell => {
        cell.classList.remove(X_CLASS, O_CLASS, 'show-x', 'show-o');
        cell.querySelectorAll('svg').forEach(svg => {
            svg.querySelectorAll('line, circle').forEach(element => {
                requestAnimationFrame(() => {
                    if (element instanceof SVGGeometryElement) {
                        element.style.strokeDashoffset = element.getTotalLength();
                    }
                });
            });
        });
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, { once: true });
    });
    setBoardHoverClass();
    winningMessageElement.classList.remove('show');
}

function handleClick(e) {
    const cell = e.target.closest('.cell');
    const currentClass = oTurn ? O_CLASS : X_CLASS;
    placeMark(cell, currentClass);
    playSound('piece-place.mp3');
    if (checkWin(currentClass)) {
        console.log("Win detected");
        endGame(false);
    } else if (isDraw()) {
        console.log("Draw detected");
        endGame(true);
    } else {
        swapTurns();
        setBoardHoverClass();
        updateTurnIndicator();
    }
}

function endGame(draw) {
    playSound('game-end.mp3');
    if (draw) {
        winningMessageTextElement.innerText = 'Draw!';
    } else {
        winningMessageTextElement.innerText = `${oTurn ? "O's" : "X's"} Wins!`;
    }
    winningMessageElement.classList.add('show');
}

function isDraw() {
    return [...cells].every(cell => {
        return cell.classList.contains('show-x') || cell.classList.contains('show-o');
    });
}

function placeMark(cell, currentClass) {
    if (currentClass === X_CLASS) {
        cell.classList.add('show-x');
    } else {
        cell.classList.add('show-o');
    }
}

function swapTurns() {
    oTurn = !oTurn;
}

function setBoardHoverClass() {
    gameBoard.classList.remove(X_CLASS, O_CLASS);
    if (oTurn) {
        gameBoard.classList.add(O_CLASS);
    } else {
        gameBoard.classList.add(X_CLASS);
    }
}

function updateTurnIndicator() {
    currentTurnElement.innerText = `Current Turn: ${oTurn ? "O" : "X"}`;
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            const cell = cells[index];
            return cell.classList.contains(currentClass === X_CLASS ? 'show-x' : 'show-o');
        });
    });
}
