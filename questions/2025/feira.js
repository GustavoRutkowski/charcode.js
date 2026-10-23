const toID = receita => receita.split(' ').map(e => e[0]).join('');

export default function feira(projects = []) {
    const ids = projects.map(toID);
    const noRepeat = ids.filter((e, i) => ids.indexOf(e) === i);
    return ids.length - noRepeat.length;
}
