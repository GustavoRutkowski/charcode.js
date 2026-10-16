const VIGERENE_TABLE = [
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    'BCDEFGHIJKLMNOPQRSTUVWXYZA',
    'CDEFGHIJKLMNOPQRSTUVWXYZAB',
    'DEFGHIJKLMNOPQRSTUVWXYZABC',
    'EFGHIJKLMNOPQRSTUVWXYZABCD',
    'FGHIJKLMNOPQRSTUVWXYZABCDE',
    'GHIJKLMNOPQRSTUVWXYZABCDEF',
    'HIJKLMNOPQRSTUVWXYZABCDEFG',
    'IJKLMNOPQRSTUVWXYZABCDEFGH',
    'JKLMNOPQRSTUVWXYZABCDEFGHI',
    'KLMNOPQRSTUVWXYZABCDEFGHIJ',
    'LMNOPQRSTUVWXYZABCDEFGHIJK',
    'MNOPQRSTUVWXYZABCDEFGHIJKL',
    'NOPQRSTUVWXYZABCDEFGHIJKLM',
    'OPQRSTUVWXYZABCDEFGHIJKLMN',
    'PQRSTUVWXYZABCDEFGHIJKLMNO',
    'QRSTUVWXYZABCDEFGHIJKLMNOP',
    'RSTUVWXYZABCDEFGHIJKLMNOPQ',
    'STUVWXYZABCDEFGHIJKLMNOPQR',
    'TUVWXYZABCDEFGHIJKLMNOPQRS',
    'UVWXYZABCDEFGHIJKLMNOPQRST',
    'VWXYZABCDEFGHIJKLMNOPQRSTU',
    'WXYZABCDEFGHIJKLMNOPQRSTUV',
    'XYZABCDEFGHIJKLMNOPQRSTUVW',
    'YZABCDEFGHIJKLMNOPQRSTUVWX',
    'ZABCDEFGHIJKLMNOPQRSTUVWXY',
];

const [ALPHABET] = VIGERENE_TABLE;


export default function mensagem(plaintext, key) {
    let j = 0;
    let fullstring = '';
    
    const encode = (char, keyChar) => {
        if (!ALPHABET.includes(char)) return char;
        const row = ALPHABET.indexOf(keyChar);
        const col = ALPHABET.indexOf(char);
        return VIGERENE_TABLE[row][col];
    };

    const next = () => { j++; if (j === key.length) j = 0; };

    for (let i = 0; i < plaintext.length; i++) {     
        const encoded = encode(plaintext[i], key[j]);
        if(!ALPHABET.includes(encoded)) j--;
        fullstring += encoded;
        next();
    }
    
    return fullstring;
}
