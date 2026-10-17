// Para uma figurinha X poder ser trocada com uma figurinha Y:
// * X > 1
// * Y > 1
// * X não está no conjunto cY
// * Y não está no conjunto cX

// Abordagem:

function frequence(set) {
    const freq = new Map();
    set.forEach(e => freq.set(e, (freq.get(e) || 0) + 1));
    return freq;
}

export default function figurinhas(setA, setB) {
    const freqA = frequence(setA);
    const freqB = frequence(setB);

    const copyA = new Map(freqA);
    freqB.forEach((_, key) => freqA.delete(key));
    copyA.forEach((_, key) => freqB.delete(key));

    const deleteUnique = (v, k, map) => { if (v <= 1) map.delete(k); }
    freqA.forEach(deleteUnique);
    freqB.forEach(deleteUnique);

    return Math.min(...[freqA.size, freqB.size]);
}
