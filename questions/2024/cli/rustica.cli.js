import { input, output } from '../../../utils/io.js';
import rustica from '../rustica.js';

const startUnix = parseInt(input());
const runners = parseInt(input());

const endUnixes = [];

for (let i = 0; i < runners; i++) {
    const row = parseInt(input());
    endUnixes.push(row);
}

const result = rustica(startUnix, endUnixes);
output(result);
