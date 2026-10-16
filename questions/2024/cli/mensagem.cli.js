import { input, output } from '../../../utils/io.js';
import mensagem from '../mensagem.js';

const message = input().toUpperCase();
const key = input().toUpperCase();

const result = mensagem(message, key);
output(result);
