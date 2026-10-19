import { input, output } from '../../../utils/io.js';
import campominado from '../campominado.js';

const [rows, cols] = input().split(' ', 2).map(Number);
const board = [];

for (let i = 0; i < rows; i++) {
    const row = input().split('', cols);
    board.push(row);
}

const result = campominado(board);
output(result.map(e => e.join('')).join('\n'));
