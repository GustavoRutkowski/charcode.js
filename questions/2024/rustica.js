const twoZero = n => n.toString().padStart(2, '0');

export default function rustica(startUnix, endUnixes=[]) {
    const diffs = endUnixes.map(t => t - startUnix);
    const winnerUnix = Math.min(...diffs);
    const date = new Date(winnerUnix * 1000);

    const hh = twoZero(date.getHours());
    const mm = twoZero(date.getMinutes());
    const ss = twoZero(date.getSeconds());
    return `${hh}:${mm}:${ss}`;
}
