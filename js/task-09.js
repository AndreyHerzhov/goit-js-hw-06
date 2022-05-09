function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const colorPicker = document.querySelector('.color')
const colorBtn = document.querySelector('.change-color')
const background = document.querySelector('.widget')
const body = document.querySelector('body')



colorBtn.addEventListener('click', function() {
  body.style.backgroundColor =  getRandomHexColor()
  colorPicker.innerHTML = body.style.backgroundColor
  
})
