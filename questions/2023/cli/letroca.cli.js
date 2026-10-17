import { input, output } from '../../../utils/io.js';
import letroca from '../letroca.js';

const word = input();
const results = letroca(word);
output(results.join('\n'));
