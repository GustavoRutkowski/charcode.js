import { input, output } from '../../../utils/io.js';
import doces from '../doces.js';

const [chaves, salas] = input().split(' ', 2).map(Number);
const resultado = doces(chaves, salas);
output(resultado);
