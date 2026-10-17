function subsequences(str) {
    const result = new Set();

    function backtrack(index, path) {
        if (index === str.length) return result.add(path);
        backtrack(index + 1, path + str[index]); // Decisão 1: Incluir o caractere atual
        backtrack(index + 1, path);              // Decisão 2: NÃO incluir o caractere atual
    }

    backtrack(0, '');
    return result;
}

function permutations(str) {
    const results = new Set();
    if (str.length === 0) return [''];

    for (let i = 0; i < str.length; i++) {
        const curr = str[i];
        const remaining = str.slice(0, i) + str.slice(i + 1);
        
        const remainingPermutations = permutations(remaining);
        
        for (let permutation of remainingPermutations)
            results.add(curr + permutation);
    }

    return results;
}

export default function letroca(word) {
    const res = new Set();
    const sub = subsequences(word);
    sub.forEach(s => permutations(s).forEach(p => res.add(p)));
    res.delete('');
    return [...res.values()].toSorted();
}
