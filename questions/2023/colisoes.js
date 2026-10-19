// Essa questão está PARCIALMENTE concluída
// Os casos 2 e 3 são reproduzíveis
// O caso 1 produz uma saída que não condiz com o próprio enunciado (afinal a saída exibe uma massa maior que as massas de entrada, mesmo não havendo nenhuma regra explifica no enunciado que permita ganho de massa)
// Por hora essa questão será considerada incompleta.

class Asteroide {
    static #asteroides = [];
    
    constructor(size, position, direction) {
        this.size = size;
        this.position = position;
        this.direction = direction;
        Asteroide.#asteroides.push(this);
    }

    static get remainingAsteroides() {
        return Asteroide.#asteroides.length;
    }

    static get all() {
        return Asteroide.#asteroides;
    }

    static cleanup() {
        Asteroide.#asteroides = Asteroide.#asteroides.filter(a => a.size > 0);
    }

    // Garante os efeitos de uma mudança de asteroido no cenário global da órbita
    static #handleOrbita(asteroide) {
        const colisions = Asteroide.#asteroides
            .filter(a => a !== asteroide && a.position === asteroide.position);
    
        if (!colisions.length) return Asteroide.cleanup();
        const [colisor] = colisions;

        const destroy = (a, b) => {
            a.size -= b.size;
            b.size = 0;
        };

        if (colisor.size > asteroide.size) destroy(colisor, asteroide);
        else if (colisor.size < asteroide.size) destroy(asteroide, colisor);
        else {
            asteroide.size = 0;
            colisor.size = 0;
        }

        Asteroide.cleanup();
    }

    move() {
        this.size--;
        this.position += this.direction;
        // Garante rotação correta
        if (this.position < 0 || this.position > 359)
            this.position = 360 - Math.abs(this.position);
        Asteroide.#handleOrbita(this);
    }
}

export default function colisoes(asteroides = []) {
    asteroides.forEach(a => new Asteroide(...a));

    while (true) {
        Asteroide.all.forEach(a => a.move());
        if (Asteroide.remainingAsteroides <= 1) break;
    }

    if (Asteroide.remainingAsteroides === 0)
        return ['Nenhum asteroide sobrevivente'];

    const [survivor] = Asteroide.all;

    return [
        'Sobrevivente',
        `Tamanho: ${survivor.size}`,
        `Posicao: ${survivor.position}`,
        `Direcao: ${survivor.direction}`
    ];
}
