const center = (left, right) => Math.floor((left + right) / 2);

export default function mineracao(concentrations, target) {
    let left = 0;
    let right = concentrations.length - 1;
    
    const attempts = [];
    
    while (left <= right) {
        let mid = center(left, right);

        attempts.push({
            value: concentrations[mid],
            depth: mid,
            diff: Math.abs(concentrations[mid] - target)
        });

        if (concentrations[mid] === target) break;

        if (concentrations[mid] > target) {
            right = mid - 1;
            console.warn(left, right);
            continue;
        }
    
        if (concentrations[mid] < target) {
            left = mid + 1;
            console.warn(left, right);
            continue;
        }
    }

    const [nearest] = attempts.toSorted((a, b) => a.diff - b.diff);
    return [attempts.length, nearest.value, nearest.depth];
}
