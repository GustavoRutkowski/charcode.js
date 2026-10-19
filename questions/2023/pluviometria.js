const sum = arr => arr.reduce((acc, e) => acc + e, 0);

function status(avg, measurement) {
    if (avg >= measurement + (measurement * 0.1)) return 'GRANDE PERIGO';
    if (avg >= measurement) return 'PERIGO';
    if (avg >= measurement * 0.8) return 'PERIGO POTENCIAL';
    return 'ESTAVEL';
}

export default function pluviometria(stationsQuantity, threshold, measurement, stations = [[]]) {
    if (stations.length !== stationsQuantity) return ['ENTRADA INVALIDA'];
    
    const accumulated = [];
    stations.forEach(e => {
        const acc = e.length === measurement ? sum(e) : null;
        accumulated.push(acc);
    });

    const response = [
        ...accumulated.map((e, i) => {
            return `Estacao ${i + 1}: ` + (e === null
                ? 'NÚMERO DE MEDICOES INVALIDO'
                : `Acumulado = ${e.toFixed(2)}mm`
            ); 
        })
    ];

    const validAccumulated = accumulated.filter(e => e !== null);
    if (validAccumulated.length === 0) {
        response.push('DADOS INSUFICIENTES!');
        return response;
    }

    const avg = sum(validAccumulated) / validAccumulated.length;
    response.push(
        '====',
        `MEDIA DO ACUMULADO = ${avg.toFixed(2)}mm`,
        `STATUS GERAL DA REGIAO = [${status(avg, threshold)}]`
    );

    const max = Math.max(...validAccumulated);
    if (max === 0) return response;
    
    const maxAccumulatedList = accumulated
        .map((e, i) => e === max ? (i + 1) : null)
        .filter(e => e !== null);
    
    response.push(
        '====',
        'ESTACOES COM MAIORES ACUMULADOS',
        ...maxAccumulatedList.map(e => `ESTACAO ${e}: Acumulado = ${max.toFixed(2)}mm`)
    );

    return response;
}
