import { input, output } from '../../../utils/io.js';
import ciclismo from '../ciclismo.js';

const battery = [];
const ROUNDS = 10;
const RUNNERS = 4;

for (let i = 0; i < (ROUNDS + 1) * RUNNERS; i++) {
    const runnerInfo = input().split(' ', 4).map(Number);
    battery.push(runnerInfo);
}

const result = ciclismo(battery);
output(result);
