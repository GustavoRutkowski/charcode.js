export default function podio(desempenhos = [[]]) {
    return desempenhos.toSorted((a, b) => {
        const questionsDESC = b[0] - a[0];
        if (questionsDESC !== 0) return questionsDESC;

        const hoursASC = a[1] - b[1];
        if (hoursASC !== 0) return hoursASC;

        const minutesASC = a[2] - b[2];
        if (minutesASC !== 0) return minutesASC;

        const secondsASC = a[3] - b[3];
        return secondsASC;
    }).slice(0, 3);
}
