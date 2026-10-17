import { input, output } from '../../../utils/io.js';
import mineracao from '../mineracao.js';

const concentrations = input().split(' ').map(Number);
const target = parseInt(input());

const result = mineracao(concentrations, target);
output(result.join(' '));
