const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector('#ingredients')

// 

// const ingedientItem = document.createElement("li");
// ingedientItem.classList.add('item') 

const newList = ingredients.map( item => {
  const ingedientItem = document.createElement("li");
  ingedientItem.classList.add('item')
  // ingedientItem.innerHTML = item; // innerHTML
  // ingedientItem.textContent = item; //  textContent  
  ingedientItem.insertAdjacentHTML("beforeend", item); // insertAdjacentHTML
  ingredientsList.append(ingedientItem);
})

console.log(ingredientsList)


 
 