const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector('#ingredients')

const newList = ingredients.map( item => {
  const ingedientItem = document.createElement("li");
  ingedientItem.classList.add('item')
  ingedientItem.textContent = item; //  textContent  
  // ingedientItem.insertAdjacentHTML("beforeend", item); // insertAdjacentHTML
  // ingedientItem.innerHTML = item; // innerHTML
  return ingedientItem;
})

ingredientsList.append(...newList)


 
 