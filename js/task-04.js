const decreaseBtn = document.querySelector('button[data-action="decrement"]');
const increaseBtn = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#value')

let counterValue = 0;

counter.innerHTML = 0;
decreaseBtn.addEventListener('click', () => {
    counterValue -= 1;
    counter.innerHTML = counterValue;
     
})

increaseBtn.addEventListener('click', () => {
    counterValue += 1;
    counter.innerHTML = counterValue;
}) 




 

 