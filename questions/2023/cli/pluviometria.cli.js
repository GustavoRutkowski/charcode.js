import { input, output } from '../../../utils/io.js';
import pluviometria from '../pluviometria.js';

const stationsQuantity = parseInt(input());
const threshold = parseInt(input());
const measurements = parseInt(input());

const stations = [];

for (let i = 0; i < stationsQuantity; i++) {
    const line = input();
    if (!line) break;
    const row = line.split(' ').map(Number);
    stations.push(row);
}

const result = pluviometria(stationsQuantity, threshold, measurements, stations);
output(result.join('\n'));
