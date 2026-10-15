export default function doces(keys, rooms) {
    let total = 0;
    for (let i = rooms; i > (rooms - keys); i--) total += i;
    return total - keys;
}
