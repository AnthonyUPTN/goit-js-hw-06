'use strict';
// const categoriesListEl = document.querySelector('ul')
// const categoriesItems = categoriesListEl.children;
// console.log("Number of categories: " + categoriesItems.length)

const categoriesCount = document.querySelectorAll('.item');
console.log('Number of categories: ' + categoriesCount.length);

const categoriesTitlesEl = document.querySelectorAll('.item');
const categoriesTitlesValues = categoriesTitlesEl.forEach(el => {
    console.log('Category: ' + el.firstElementChild.textContent);
    console.log('Elements: ' + el.lastElementChild.children.length);
})
