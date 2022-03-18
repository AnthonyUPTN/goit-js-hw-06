const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients')

ingredients.forEach(el => {
  const listItemEl = document.createElement('li');
  listItemEl.textContent = el;
  listItemEl.classList.add('ingredients__item');
 
  ingredientsListEl.append(listItemEl);
});