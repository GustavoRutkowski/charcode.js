function bpmFrom(r1, r2, rate) {
    const TIME_MS_1000 = r2 - r1;
    const TIME_MS = (1000 * TIME_MS_1000) / rate;
    return 60_000 / TIME_MS;
}

export default function bpm(rate, spikes = []) {
    const bpmList = [];

    for (let i = 0; i < spikes.length - 1; i++) {
        const res = bpmFrom(spikes[i], spikes[i+1], rate)
        bpmList.push(res);
    }

    return bpmList;
}
