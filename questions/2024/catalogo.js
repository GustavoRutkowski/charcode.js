const toID = receita => receita.split(' ').map(e => e[0]).join('');

export default function catalogo(receitas = []) {
    const ids = receitas.map(toID);
    const semRepetidos = ids.filter((e, i) => ids.indexOf(e) === i);
    return ids.length - semRepetidos.length;
}
