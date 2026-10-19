// Complexidade Linear: O(n)
export default function contrapeso(weights = [], counterweight) {
    const freqMap = new Map();
    weights.forEach(w => freqMap.set(w, (freqMap.get(w) || 0) + 1));

    let counter = 0;

    weights.forEach(w => {
        const diff = counterweight - w;
        // Evita montar pares com o mesmo item
        if (diff === w && freqMap.get(w) < 2) return;
        if (freqMap.get(diff)) counter += freqMap.get(diff);
    });

    return counter / 2;
}
