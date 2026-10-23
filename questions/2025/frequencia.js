const BASE = 440;

const oitavasFrom = weight => {
    const freq = BASE * weight;
    return [freq/8, freq/4, freq/2, freq, freq*2, freq*4, freq*8, freq*16, freq*32, freq*64];
};

const OCTAVE_MAP = {
    'A' : oitavasFrom(2 ** (0 / 12)),
    'A#': oitavasFrom(2 ** (1 / 12)),
    'B' : oitavasFrom(2 ** (2 / 12)),
    'C' : oitavasFrom(2 ** (3 / 12)),
    'C#': oitavasFrom(2 ** (4 / 12)),
    'D' : oitavasFrom(2 ** (5 / 12)),
    'D#': oitavasFrom(2 ** (6 / 12)),
    'E' : oitavasFrom(2 ** (7 / 12)),
    'F' : oitavasFrom(2 ** (8 / 12)),
    'F#': oitavasFrom(2 ** (9 / 12)),
    'G' : oitavasFrom(2 ** (10 / 12)),
    'G#': oitavasFrom(2 ** (11 / 12))
};

const frequencia = (octave, note) => OCTAVE_MAP[note][octave].toFixed(2);
export default frequencia;