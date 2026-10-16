export default function rps(p1, p2) {
    const VALID = new Set([0, 2, 5]);
    VALID.add(p1); VALID.add(p2);
    if (VALID.size > 3) return 'JOGO INVALIDO';
    if (p1 === p2) return 'EMPATE';
    if (p1 === 0 && p2 === 2) return 'JOGADOR 1';
    if (p1 === 0 && p2 === 5) return 'JOGADOR 2';
    if (p1 === 2 && p2 === 0) return 'JOGADOR 2';
    if (p1 === 2 && p2 === 5) return 'JOGADOR 1';
    if (p1 === 5 && p2 === 0) return 'JOGADOR 1';
    if (p1 === 5 && p2 === 2) return 'JOGADOR 2';
}
