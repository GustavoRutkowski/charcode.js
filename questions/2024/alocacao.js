export default function alocacao(frascos = [], litros) {
    let ml = litros * 1000;
    frascos.sort((a, b) => b - a);

    let contador = 0;
    if (ml === 0) return 1;

    for (const frasco of frascos) {
        ml -= frasco;
        contador++;
        if (ml <= 0) break;
    }

    if (ml > 0) return -1;
    return contador;
}
