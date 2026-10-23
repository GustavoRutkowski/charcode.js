export default function aposta(apostaConfig = []) {
    const N = apostaConfig.shift();
    const apostadores = [];

    for (let i = 0; i < N; i++) {
        apostadores.push([
            apostaConfig.shift(),
            apostaConfig.shift()
        ]);
    }

    const value = apostaConfig.shift();
    const [Af, Bf] = apostaConfig;

    const points = apostadores.map(([A, B]) => {
        if (A === Af && B === Bf) return 3;
        let counter = 0;

        if (A === Af || B === Bf) counter++;
        if (Math.sign(Af - Bf) === Math.sign(A - B)) counter++;
        return counter;
    });

    let perdedores = 0;
    let somaPontos = 0;

    points.forEach(e => {
        if (e === 0) perdedores++;
        somaPontos += e;
    });

    console.warn('perdedores', perdedores);
    console.warn('somaPontos', somaPontos);

    const restante = perdedores * value;
    const valorPorPonto = restante / somaPontos;
    return points.map(e => {
        if (e === 0) return '0.00';
        return (value + e * valorPorPonto).toFixed(2);
    });
}
