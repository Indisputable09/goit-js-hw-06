const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// VARIANT #1
const list = document.querySelector('#ingredients');
ingredients.forEach(ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');

  list.append(item);
})

// VARIANT #2

// const list = document.querySelector('#ingredients');
// ingredients.map(ingredient => {
//   const item = document.createElement('li');
//   item.textContent = ingredient;
//   item.classList.add('item');

//   list.append(item);
// })

// VARIANT #3

// for (const ingredient of ingredients) {
// const item = document.createElement('li');
//   item.textContent = ingredient;
//   item.classList.add('item');

//   list.append(item);
// }