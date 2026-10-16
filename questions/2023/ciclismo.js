const unstackFour = array => [array.pop(), array.pop(), array.pop(), array.pop()];

const MS = 1000;
const timestampFrom = (min, sec, ms) => ms + (sec * MS) + (min * MS**2);

class Runner {
    static #runners = {};

    constructor(id) {
        const runner = { id, current: 0, total: 0, points: 0 }
        Runner.#runners[id.toString()] = runner;
    }

    static get map() {
        return Runner.#runners;
    }

    static list({ orderBy, mode = 'asc' }, runners = null) {
        const values = Object.values(runners || Runner.#runners);
        if (!orderBy) return values;

        return values.toSorted((a, b) => {
            if (mode === 'desc') return b[orderBy] - a[orderBy];
            if (mode === 'asc') return a[orderBy] - b[orderBy];
        });
    }

    static point(id) {
        this.#runners[id].points++;
    }

    static updateTimeFrom(id, timestamp) {
        const runner = Runner.#runners[id];
        runner.current = Math.abs(timestamp - runner.total);
        runner.total = timestamp;
    }
}


export default function ciclismo(battery = []) {
    const nextRound = () => unstackFour(battery);
    nextRound(); // Descarta os primeiro round (zerado)

    for (let i = 1; i <= 4; i++) new Runner(i);
    const givePoint = ({ id }) => Runner.point(id);

    const ROUNDS = 10;

    for (let i = 0; i < ROUNDS; i++) {
        const round = nextRound();
        round.forEach(([id, min, sec, ms]) => {
            const timestamp = timestampFrom(min, sec, ms);
            Runner.updateTimeFrom(id, timestamp);
        });

        const ranking = Runner.list({ orderBy: 'current' });
        const [fast] = ranking;
        ranking.filter(r => r.current === fast.current)
        .forEach(givePoint);
    }

    const ranking = Runner.list({ orderBy: 'points', mode: 'desc' });
    const [winner] = ranking;
    const winners = ranking.filter(r => r.points === winner.points);

    if (winners.length > 1) {
        const [champion] = Runner.list({ orderBy: 'total' }, winners);
        return champion.id;
    }

    const [champion] = winners;
    return champion.id;
}
