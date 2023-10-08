const gameBoard = (function () {
    let turn = 'x'; 
    let cells = document.querySelectorAll('.cell');

    const playTurn = (cell) => {
        cell.textContent = turn;
        turn = turn === 'x' ? 'o' :'x';
    }

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            playTurn(cell);
        });
    });
})();