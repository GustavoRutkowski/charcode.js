export default function semaforo(estudo = []) {
    estudo.shift(); // Descarta valor inicial
    const TARGET_PERCENT = estudo.pop();
    const times = [];

    while (true) {
        const cycleSize = estudo.shift() || null;
        if (cycleSize === null) break;
        for (let i = 0; i < cycleSize; i++) times.push(estudo.shift());
    }

    times.sort((a, b) => a - b);
    const MAX = Math.max(...times);
    const TIMES_QUANTITY = times.length;

    for (let s = 1; s <= MAX; s++) {
        const canPass = times.filter(time => time <= s).length;
        const percent = (canPass * 100) / TIMES_QUANTITY;
        if (percent >= TARGET_PERCENT) return s;
    }
}
