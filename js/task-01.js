const list = document.querySelector('#categories')
const items = document.querySelectorAll('.item')
 

// console.log('Number of categories:', items.length)

console.log('Number of categories:', list.children.length)
 
 
// Перебирающий forEach
items.forEach(function (item) {
    console.log('Category:', item.firstElementChild.textContent);
    const numberOfLi = item.lastElementChild.children.length
    console.log('Elements:', numberOfLi)
  });