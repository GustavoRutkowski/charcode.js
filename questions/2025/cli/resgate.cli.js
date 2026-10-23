import { input, output } from '../../../utils/io.js';
import resgate from '../resgate.js';

const startPosition = input().split(' ', 2).map(Number);
const startOrientation = input();
const instructionsQuantity = parseInt(input());
const instructions = input().split(' ', instructionsQuantity);

const result = resgate(startPosition, startOrientation, instructions);
output(result.map(e => e.join(' ')).join('\n'));
