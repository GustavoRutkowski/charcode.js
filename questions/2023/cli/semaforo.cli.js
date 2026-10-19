import { input, output } from '../../../utils/io.js';
import semaforo from '../semaforo.js';

const study = input().split(' ').map(Number);
output(semaforo(study));
