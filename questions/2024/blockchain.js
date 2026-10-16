function calcBlockRate(votes) {
    let voteYes = 0;
    votes.forEach(vote => {
        if (vote === 'sim') voteYes++;
    });
    return (1 / votes.length) * voteYes;
}

const formatBlock = b => `Bloco ${b.id}: Bloco ${b.accept ? 'aceito' : 'rejeitado'}`;

export default function blockchain(matrix = [[]]) {
    const blocks = matrix.map((row, i) => {
        const [RATE, ...votes] = row.toReversed();
        const blockRate = calcBlockRate(votes);

        return {
            id: i + 1,
            accept: blockRate >= RATE
        };
    });

    const accept = blocks.filter(b => b.accept === true).map(b => b.id);
    return [
        ...blocks.map(formatBlock),
        `Blocos aceitos: ${accept.join(', ')}`
    ];
}
