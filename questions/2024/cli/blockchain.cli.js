import { input, output } from '../../../utils/io.js';
import blockchain from '../blockchain.js';

const matrix = [];

while (true) {
    const $input = input();
    if (!$input) break;

    const block = $input.split(', ');
    block[block.length - 1] = Number(block[block.length - 1]);
    matrix.push(block);
}

const result = blockchain(matrix);
result.forEach(row => output(row));
