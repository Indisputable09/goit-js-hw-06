const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let newArray = [];
const list = document.querySelector('#ingredients');
ingredients.forEach(ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  newArray.push(item);
})

list.append(...newArray);