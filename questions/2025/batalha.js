const RING_BUFFS_MAP = {
    'V': 0.5,
    'A': 0.4,
    'R': 0.3,
    'B': 0.2,
    'P': 0.1,
};

class Glad {
    constructor(name, str, agi, ring) {
        this.name = name;
        this.power = (str * 2) + agi;
        this.power += this.power * RING_BUFFS_MAP[ring];
        this.agi = agi;
    }
}

function duel(gladA, gladB) {
    const duel = [gladA, gladB]
    duel.sort((a, b) => {
        const powerDESC = b.power - a.power;
        if (powerDESC !== 0) return powerDESC;
        return b.agi - a.agi;
    });
    return duel[0];
};

export default function batalha(gladiators = [[]]) {
    const glads = gladiators.map(stats => new Glad(...stats));
    let winner = glads.shift();
    
    const winners = [];

    while (glads.length > 0) {
        const enemy = glads.shift();
        winner = duel(winner, enemy);
        winners.push(winner);
    }

    return [...winners.map(e => e.name), `Glorioso vencedor: ${winner.name}`];
}
