const board = document.getElementById('board');
const status = document.getElementById('status');
let cells = Array(9).fill(null);
let gameOver = false;

const WIN_COMBOS = [
  [0,1,2],[3,4,5],[6,7,8], // rows
  [0,3,6],[1,4,7],[2,5,8], // cols
  [0,4,8],[2,4,6]          // diagonals
];

function createBoard() {
  board.innerHTML = '';
  cells = Array(9).fill(null);
  gameOver = false;
  status.textContent = "Your turn!";
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click', () => makeMove(i));
    board.appendChild(cell);
  }
}

function makeMove(i) {
  if (gameOver || cells[i]) return;
  cells[i] = 'X';
  updateBoard();
  if (checkWinner(cells, 'X')) {
    status.textContent = "You win!";
    gameOver = true;
    return;
  }
  if (cells.every(cell => cell)) {
    status.textContent = "It's a tie!";
    gameOver = true;
    return;
  }
  aiMove();
}

function aiMove() {
  let best = minimax(cells, 'O');
  cells[best.index] = 'O';
  updateBoard();
  if (checkWinner(cells, 'O')) {
    status.textContent = "AI wins!";
    gameOver = true;
  } else if (cells.every(cell => cell)) {
    status.textContent = "It's a tie!";
    gameOver = true;
  } else {
    status.textContent = "Your turn!";
  }
}

function updateBoard() {
  const cellDivs = board.querySelectorAll('.cell');
  cells.forEach((val, i) => {
    cellDivs[i].textContent = val || '';
    if (val) cellDivs[i].classList.add('disabled');
  });
}

function checkWinner(board, player) {
  return WIN_COMBOS.some(combo =>
    combo.every(index => board[index] === player)
  );
}

function minimax(newBoard, player) {
  const availSpots = newBoard
    .map((val, i) => val === null ? i : null)
    .filter(i => i !== null);

  if (checkWinner(newBoard, 'X')) return { score: -10 };
  if (checkWinner(newBoard, 'O')) return { score: 10 };
  if (availSpots.length === 0) return { score: 0 };

  const moves = [];

  for (let i of availSpots) {
    const move = { index: i };
    newBoard[i] = player;

    const result = minimax(newBoard, player === 'O' ? 'X' : 'O');
    move.score = result.score;

    newBoard[i] = null;
    moves.push(move);
  }

  return player === 'O'
    ? moves.reduce((best, m) => m.score > best.score ? m : best)
    : moves.reduce((best, m) => m.score < best.score ? m : best);
}

function restartGame() {
  createBoard();
}

createBoard();
