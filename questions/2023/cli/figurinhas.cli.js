import { input, output } from '../../../utils/io.js';
import figurinhas from '../figurinhas.js';

const setA = input().split(' ').map(Number);
const setB = input().split(' ').map(Number);

const result = figurinhas(setA, setB);
output(result);
