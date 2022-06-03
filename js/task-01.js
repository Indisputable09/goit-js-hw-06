// VARIANT #1

const categoriesEl = document.querySelector('#categories');
const categoriesChildrenEl = categoriesEl.children;
console.log("Number of categories: ", categoriesChildrenEl.length);
[...categoriesChildrenEl].forEach(element => {
    const titleEl = element.firstElementChild;
    const itemElementsEl = element.lastElementChild;
    const itemsEl = itemElementsEl.children;

    console.log("Category: ", titleEl.textContent);
    console.log("Elements: ", itemsEl.length);
});

// VARIANT #2

// for (const element of categoriesChildrenEl) {
    // const title = element.firstElementChild;
    // const itemElements = element.lastElementChild;
    // const itemsEl = itemElements.children;

    // console.log("Category: ", title.textContent);
    // console.log("Elements: ", itemsEl.length);
// }

// SHORT VARIANT

// const categoriesEl = document.querySelector('#categories');
// console.log("Number of categories: ", categoriesEl.children.length);

// [...categoriesEl.children].forEach(element => {
//     console.log("Category: ", element.firstElementChild.textContent);
//     console.log("Elements: ", element.lastElementChild.children.length);
// });