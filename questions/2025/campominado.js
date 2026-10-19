function neighborsFrom(matrix, i, j) {
    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1],
        [-1, -1], [-1, 1], [1, -1], [1, 1]
    ];
    return getNeighbors(matrix, i, j, directions);
}

function getNeighbors(matrix, i, j, directions) {
    const rows = matrix.length;
    if (rows === 0) return [];

    return directions
        .map(([di, dj]) => {
            const ni = i + di;
            const nj = j + dj;

            if (ni >= 0 && ni < rows && nj >= 0 && nj < matrix[ni].length) {
                return {
                    value: matrix[ni][nj],
                    position: [ni, nj]
                };
            }
            return null;
        })
        .filter(neighbor => neighbor !== null);
}

export default function campominado(board = [[]]) {
    const result = [...board.map(row => [...row])];

    result.forEach((row, i) => {
        row.forEach((cell, j) => {
            if (cell === '*') return;
            const neighbors = neighborsFrom(board, i, j);
            
            const bombsAround = neighbors
            .filter(ng => ng.value === '*').length;
            result[i][j] = bombsAround.toString();
        });
    });

    return result;
}
