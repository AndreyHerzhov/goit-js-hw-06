function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes'),
  div: document.querySelector('.div-inside')
}
console.log(refs.input)
console.log(refs.createBtn)
console.log(refs.destroyBtn)

refs.createBtn.addEventListener('click',createBoxes )

let styleSize = 30;
 

function createBoxes (amount) {
  amount = refs.input.value;
  console.log(amount)
  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement('div')
    newDiv.classList.add('div-inside')
    refs.boxes.append(newDiv)
    newDiv.style.backgroundColor =  getRandomHexColor()
    newDiv.style.width = `${styleSize}px`;
    newDiv.style.height = `${styleSize}px`;
    console.log(styleSize)
    styleSize += 10;
    
  }
}
refs.destroyBtn.addEventListener('click', destroyBoxes)

function destroyBoxes() {
  refs.boxes.innerHTML = ''
  refs.input.value = 0;
}


