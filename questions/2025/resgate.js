function getIncrements(orientation) {
    if (orientation === 'N') return [-1, 0];
    if (orientation === 'S') return [+1, 0];
    if (orientation === 'L') return [0, +1];
    if (orientation === 'O') return [0, -1];
}

export default function resgate(startPosition, startOrientation, instructions = []) {
    const moves = [];
    
    let [x, y] = startPosition;
    moves.push([x, y]);
    
    let orientation = startOrientation;
    let [xi, yi] = getIncrements(orientation);

    const CROSS = ['N', 'S', 'L', 'O'];

    instructions.forEach(cmd => {
        if (cmd === 'E') {
            orientation = CROSS.at((CROSS.indexOf(orientation) - 1) % CROSS.length);
            [xi, yi] = getIncrements(orientation);
        }

        if (cmd === 'D') {
            orientation = CROSS.at((CROSS.indexOf(orientation) + 1) % CROSS.length);
            [xi, yi] = getIncrements(orientation);
        }

        x += xi;
        y += yi;
        moves.push([y, x]);
    });

    return moves;
}
