import { input, output } from '../../../utils/io.js';
import calorias from '../calorias.js';

const MATRIX_ROWS = 7;
const MATRIX_COLS = 3;

const matrix = [];

for (let i = 0; i < MATRIX_ROWS; i++) {
    const row = input().split(' ', MATRIX_COLS).map(Number);
    matrix.push(row);
}

const result = calorias(matrix);
result.forEach(row => output(row?.join?.(' ') || row));
