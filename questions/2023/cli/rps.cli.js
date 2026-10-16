import { input, output } from '../../../utils/io.js';
import rps from '../rps.js';

const p1 = parseInt(input());
const p2 = parseInt(input());
output(rps(p1, p2));
