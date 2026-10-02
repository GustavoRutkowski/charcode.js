import alocacao from '../alocacao.js';
import { input, output } from '../../../utils/io.js';

const listaFrascos = input().split(' ').map(Number);
const litros = parseFloat(input());

const resultado = alocacao(listaFrascos, litros);
output(resultado);
