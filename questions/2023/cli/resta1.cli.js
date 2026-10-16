import { input, output } from '../../../utils/io.js';
import resta1 from '../resta1.js';

const BOARD_SIDE = 7;
const board = [];

for (let i = 0; i < BOARD_SIDE; i++) {
    const row = input().split(' ', BOARD_SIDE);
    board.push(row);
}

const result = resta1(board);
result.forEach(row => output(row));
