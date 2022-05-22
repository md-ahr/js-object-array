const arr = [1, 2, 3, null, false, 4, 5, '', 'test', 6, 7];

function getOnlyNumbers(items) {
    let count = 0;
    const length = items.length;
    for (let i = 0; i < length; i++) {
        for (let j = i; j < length - 1; j++) {
            if (!items[j] || typeof items[j] !== 'number') {
                items[j] = items[j + 1];
                items[j + 1] = undefined;
            }
        }
        if (items[i] === undefined) {
            count++;
        }
    }
    items.length -= count;
    return items;
}

const result = getOnlyNumbers(arr);

console.log(result);
