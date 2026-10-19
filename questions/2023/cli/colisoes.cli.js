import { input, output } from '../../../utils/io.js';
import colisoes from '../colisoes.js';

const ASTEROIDES = 5;
const asteroides = [];

for (let i = 0; i < ASTEROIDES; i++) {
    const row = input().split(' ').map(Number);
    asteroides.push(row);
}

const result = colisoes(asteroides);
result.forEach(row => output(row));
