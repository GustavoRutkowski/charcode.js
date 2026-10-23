export default function ceramica(diameter, height) {
    const PI = 3.1415;
    const radius = diameter / 2;
    const volume = PI * (radius ** 2) * height;

    let grams = volume * 2;
    grams += grams * 0.1;
  
    const increment = 5 - (grams % 5);
    return grams + increment;
}
