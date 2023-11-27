let turn = 'x';
let winner = '';

const gameBoard = (function () {

    let board = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
    ]

    let xboard = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
    ];

    let oboard = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
    ];

    let displayedBoard = document.querySelector('.board');
    let rows = displayedBoard.children;
    let cells = [];

    for (row of rows) {
        cells.push(row.children[0]);
        cells.push(row.children[1]);
        cells.push(row.children[2]);
    }

    const playTurn = (cell) => {
        let index = cells.indexOf(cell);
        
        if (board[index] === 0) {
            cell.textContent = turn;
            board[index] = 1;
            
            if (turn === 'x') {
                xboard[index] = 1;
            }

            else {
                oboard[index] = 1;
            }

            checkStatus(turn);

            let temp = turn === 'x' ? 'o' : 'x';
            turn = temp;
        }
    }

    const checkStatus = (turn) => {
        let tieCalc = 0;
        board.forEach(e => {
            tieCalc += e;
        });

        if (turn === 'x') {
            if (
                xboard[0] + xboard[1] + xboard[2] == 3 ||
                xboard[3] + xboard[4] + xboard[5] == 3 ||
                xboard[6] + xboard[7] + xboard[8] == 3 ||
                xboard[0] + xboard[3] + xboard[6] == 3 ||
                xboard[1] + xboard[4] + xboard[7] == 3 ||
                xboard[2] + xboard[5] + xboard[8] == 3 ||
                xboard[0] + xboard[4] + xboard[8] == 3 ||
                xboard[2] + xboard[4] + xboard[6] == 3
            ) {
                winner = 'x';
                console.log('X won!');
                return true;
            }
        }

        if (turn === 'o') {
            if (
                oboard[0] + oboard[1] + oboard[2] == 3 ||
                oboard[3] + oboard[4] + oboard[5] == 3 ||
                oboard[6] + oboard[7] + oboard[8] == 3 ||
                oboard[0] + oboard[3] + oboard[6] == 3 ||
                oboard[1] + oboard[4] + oboard[7] == 3 ||
                oboard[2] + oboard[5] + oboard[8] == 3 ||
                oboard[0] + oboard[4] + oboard[8] == 3 ||
                oboard[2] + oboard[4] + oboard[6] == 3
            ) {
                winner = 'o';
                console.log('O won!');
                return true;
            }
        }

        if (winner === '' && tieCalc == 9) {
            winner = 'none';
            console.log('Tie!');
            return true;
        }

        return false;
    }

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            playTurn(cell);
        });
    });
})();


const displayController = (function () {
    const form = document.querySelector('.form');
    const gameArea = document.querySelector('.game-area');
    const turnDiv = document.querySelector('.turn');
    const winnerDiv = document.querySelector('.winner');
    const xInput = document.getElementById('x');
    const oInput = document.getElementById('o');

    let xName = 'X';
    let oName = 'O';

    form.addEventListener('submit', (event) => {
        if (xInput.value != '') {
            xName = xInput.value;            
        }

        if (oInput.value != '') {
            oName = oInput.value;
        }

        form.style.display = 'none';
        gameArea.style.display = 'flex';
        turnDiv.textContent = `Turn: ${xName}`;
        event.preventDefault();
    });

    gameArea.addEventListener('click', () => {
        displayTurn();
        displayWinner();
    });

    const displayTurn = () => {
        if (turn === 'x') {
            turnDiv.textContent = `Turn: ${xName}`;
        }

        else {
            turnDiv.textContent = `Turn: ${oName}`;
        }
    }

    const displayWinner = () => {
        if (winner != '') {
            turnDiv.textContent = '';

            if (winner === 'none') {
                winnerDiv.textContent = `It's a tie`;
            }

            if (winner === 'x') {
                winnerDiv.textContent = `${xName} won!`;
            }

            if (winner === 'o') {
                winnerDiv.textContent = `${oName} won!`;
            }
        }
    }
})();