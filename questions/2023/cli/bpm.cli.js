import { input, output } from '../../../utils/io.js';
import bpm from '../bpm.js';

const rate = Number(input());
const spikesQuantity = parseInt(input());
const spikes = input().split(' ', spikesQuantity).map(Number);

const result = bpm(rate, spikes);
output(result.map(n => n.toFixed(2)).join(' '));
