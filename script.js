const gameBoard = (function () {
    let turn = 'x';
    let board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    let displayedBoard = document.querySelector('.board');
    let rows = displayedBoard.children;
    let cells = [];

    for (row of rows) {
        cells.push(row.children[0]);
        cells.push(row.children[1]);
        cells.push(row.children[2]);
    }

    console.log(rows);
    console.log(cells);


    const playTurn = (cell) => {
        cell.textContent = turn;
        let temp = turn === 'x' ? 'o' : 'x';
        turn = temp;
    }

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            playTurn(cell);
        });
    });
})();