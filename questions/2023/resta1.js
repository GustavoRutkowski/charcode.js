const piecesFrom = board => board.flat().filter(p => p === '1').length;

function formatOutput(allowedMoves = []) {
    const toMessage = ({ from, to }) => `MOVA [${from[0]}][${from[1]}] PARA [${to[0]}][${to[1]}]`;
    return [
        `JOGADAS POSSIVEIS: ${allowedMoves.length}`,
        ...allowedMoves.map(toMessage)
    ];
}

function adjacentsFrom(board, i, j) {
    const INCREMENTS = [+1, 0, -1];
    const BOARD_SIDE = board.length; // Sempre vai ser 7

    const adjacents = [];

    INCREMENTS.forEach(incI => {
        INCREMENTS.forEach(incJ => {
            if (incI === 0 && incJ === 0) return;
            if (![incI, incJ].includes(0)) return; // Evita diagonais

            const x = i + incI; const y = j + incJ;
            if (x < 0 || x >= BOARD_SIDE || y < 0 || y >= BOARD_SIDE) return;

            adjacents.push({ value: board[x][y], i: x, j: y, incI, incJ });
        });
    });

    return adjacents;
}

export default function resta1(board = [[]]) {
    const boardPieces = piecesFrom(board);
    if (boardPieces === 0) return ['TABULEIRO VAZIO!'];
    if (boardPieces === 1) return ['RESTA UM!'];

    const allowedMoves = [];

    board.forEach((row, i) => {
        row.forEach((cell, j) => {
            if (['X', '0'].includes(cell)) return;
            const adjacents = adjacentsFrom(board, i, j);

            adjacents.forEach(({ value, i: i2, j: j2, incI, incJ }) => {
                if (['X', '0'].includes(value)) return;

                const next = board?.[i2+incI]?.[j2+incJ] || null;
                if (next === null) return;
                if (['X', '1'].includes(next)) return;

                const move = { from: [i,j], to: [i2+incI,j2+incJ] };
                allowedMoves.push(move);
            });
        });
    });

    return formatOutput(allowedMoves);
}
