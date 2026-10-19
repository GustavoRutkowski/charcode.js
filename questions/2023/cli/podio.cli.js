import { input, output } from '../../../utils/io.js';
import podio from '../podio.js';

const desempenhos = [];

while (true) {
    const line = input();
    if (!line) break;
    const row = line.split(' ', 5).map(Number);
    desempenhos.push(row);
}

const result = podio(desempenhos);
output(result.map(e => e.join(' ')).join('\n'));
