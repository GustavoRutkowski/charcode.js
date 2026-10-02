import catalogo from '../catalogo.js';
import { input, output } from '../../../utils/io.js';

const [quantidadeReceitas, ano] = input().split(' ').map(Number);

const listaReceitas = [];

for (let i = 0; i < quantidadeReceitas; i++) {
    const receita = input();
    listaReceitas.push(receita);
}

const resultado = catalogo(listaReceitas);
output(resultado);
