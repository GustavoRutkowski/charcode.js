const CAL_CARBO = 4;
const CAL_PROTEINA = 4;
const CAL_GORDURA = 9;

function tableFrom(matrix) {
    return matrix.map(row => {
        const [carbo, proteina, gordura] = row;
        return { carbo, proteina, gordura };
    })
}

function columnSumFrom(table=[]) {
    const sum = table.reduce((acc, e) => ({
        carbo: acc.carbo + (e.carbo * CAL_CARBO),
        proteina: acc.proteina + (e.proteina * CAL_PROTEINA),
        gordura: acc.gordura + (e.gordura * CAL_GORDURA)
    }), {
        carbo: 0,
        proteina: 0,
        gordura: 0
    });

    return [sum.carbo, sum.proteina, sum.gordura];
}

function rowSumFrom(table=[]) {
    return table.map(row => 
        (row.carbo * CAL_CARBO) +
        (row.proteina * CAL_PROTEINA) +
        (row.gordura * CAL_GORDURA)
    );
}

export default function calorias(matrix) {
    const table = tableFrom(matrix);
    const columnSum = columnSumFrom(table);
    const rowSum = rowSumFrom(table);
    const total = columnSum.reduce((acc, e) => acc + e, 0)
    return [columnSum, rowSum, total];
}
