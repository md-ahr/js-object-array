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

/**
 * Object Traverse
*/

for (const key in contactLists) {
    console.log(`${key}:`, contactLists[key]);
}

/**
 * Object To Array
*/

const keys = Object.keys(contactLists);
console.log(keys);

const values = Object.values(contactLists);
console.log(values);

/**
 * Object Operation -> Create, Read, Update, Delete
*/

const newContact = {
    id: 7,
    name: 'Susmit Roy',
    mobile: '019317524'
};
contactLists['7'] = { ...contactLists['7'], ...newContact };

console.log(contactLists['3']);

const updatedContact = {
    name: 'Fe-sabilillah',
};
contactLists['4'] = { ...contactLists['4'], ...updatedContact };

delete contactLists['6'];

console.log(contactLists);
