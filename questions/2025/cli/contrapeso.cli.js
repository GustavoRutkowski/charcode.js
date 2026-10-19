import { input, output } from '../../../utils/io.js';
import contrapeso from '../contrapeso.js';

const [weightsQuantity, counterweight] = input().split(' ', 2).map(Number);
const weights = input().split(' ', weightsQuantity).map(Number);

output(contrapeso(weights, counterweight));
