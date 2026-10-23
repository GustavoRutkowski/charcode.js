export default function ceramica(diameter, height) {
    const PI = 3.1415;
    const radius = diameter / 2;
    const volume = PI * (radius ** 2) * height;

    const grams = volume * 2;

    const increment = 5 - (grams % 5);
    return grams + increment;
}
