export default function gincana(x, y, tampinhas = []) {
    return (tampinhas.reduce((acc, e) => acc + e, 0) * x) + (Math.min(...tampinhas) * y);
}
