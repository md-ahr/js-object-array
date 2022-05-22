const blogLists = [];

const blogItem = {
    id: 1,
    title: 'blog 1',
    desc: 'blog description 1',
}

// blogLists.push(blogItem); // add new item on last place mutably
// blogLists.unshift(blogItem); // add new item on 1st place immutably

// const index = blogLists.findIndex((item) => item.id === 1); // find index
// blogLists[index].title = 'new blog 1'; // upodate item immutably

// const obj = blogLists.find(item => item.id === 1);
// obj.title = 'new blog 1 again'; // upodate item mutably

// const index = blogLists.findIndex((item) => item.id === 1); // find index
// blogLists.splice(index, 1); // remove item mutably

// const removeArrItem = blogLists.filter((item) => item.id !== 1);
// console.log(removeArrItem); // remove item immutably

console.log(blogLists);
