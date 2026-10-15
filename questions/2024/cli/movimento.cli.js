import { input, output } from '../../../utils/io.js';
import movimento from '../movimento.js';

const MATRIX_SIDE = 3;

const matrixA = [];
for (let i = 0; i < MATRIX_SIDE; i++) {
    const row = input().split(',', MATRIX_SIDE).map(Number); 
    matrixA.push(row);
}

const matrixB = [];
for (let i = 0; i < MATRIX_SIDE; i++) {
    const row = input().split(',', MATRIX_SIDE).map(Number); 
    matrixB.push(row);
}

const result = movimento(matrixA, matrixB);
output(result);
