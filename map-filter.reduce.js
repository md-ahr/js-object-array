const contactLists = {
    '1': {
        id: 1,
        name: 'Abdul Halim',
        mobile: '01777335813'
    },
    '2': {
        id: 2,
        name: 'Ariful Islam',
        mobile: '017614689'
    },
    '3': {
        id: 3,
        name: 'Ratul Shikder',
        mobile: '018364873'
    },
    '4': {
        id: 4,
        name: 'Ahasan Al Rabbi',
        mobile: '017264519'
    },
    '5': {
        id: 5,
        name: 'Nahid Islam',
        mobile: '019367982'
    },
    '6': {
        id: 6,
        name: 'Misel',
        mobile: '015631258'
    }
};

console.log(contactLists);



// const arr = [2, '', 5, false, NaN, 6, true, 9, 'string', 10];

// const result = arr.filter(v => !!v && typeof v === 'number').map(v => v * v); // [4, 25, 36, 81, 100]

// const result = arr.reduce((acc, curr) => {
//     if (!!curr && typeof curr === 'number') {
//         acc.push(curr * curr);
//     };
//     return acc; // [4, 25, 36, 81, 100]
// }, []);

// const result = arr.reduce((acc, curr) => {
//     if (!!curr && typeof curr === 'number') {
//         acc += curr
//     };
//     return acc; // 32
// }, 0);

// const result = arr.reduce((acc, curr) => {
//     if (!!curr && typeof curr === 'number' && curr % 2 !== 0) {
//         acc += curr;
//     };
//     return acc; // 59
// }, []);

// const result = arr.reduce((acc, curr, index) => {
//     if (!!curr && typeof curr === 'number' && curr % 2 == 0) {
//         acc[index] = { value: curr };
//     }
//     return acc;
// }, {});

// console.log(result);