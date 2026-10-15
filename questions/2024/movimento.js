const compare = (matrixA, matrixB) => JSON.stringify(matrixA) === JSON.stringify(matrixB);

function checkMovement(matrixA, matrixB, i, j) {
    if (matrixA?.[i-1]?.[j] === 0 && matrixB?.[i-1]?.[j] === 1)
        return 'cima';

    if (matrixA?.[i+1]?.[j] === 0 && matrixB?.[i+1]?.[j] === 1)
        return 'baixo';

    if (matrixA?.[i]?.[j-1] === 0 && matrixB?.[i]?.[j-1] === 1)
        return 'esquerda';

    if (matrixA?.[i]?.[j+1] === 0 && matrixB?.[i]?.[j+1] === 1)
        return 'direita';
    
    return 'sem movimento';
}

export default function movimento(matrixA, matrixB) {
    if (compare(matrixA, matrixB)) return 'sem movimento';

    const SIDE = 3;
    
    for (let i = 0; i < SIDE; i++) {
        for (let j = 0; j < SIDE; j++) {
            if (matrixA[i][j] === 0) continue;

            const direction = checkMovement(matrixA, matrixB, i, j);
            if (direction !== 'sem movimento') return direction;
        }
    }

    throw new Error('caso impossível!!!');
}
