import { input, output } from '../../../utils/io.js';
import frequencia from '../frequencia.js';

const octave = parseInt(input());
const note = input();
output(frequencia(octave, note));
