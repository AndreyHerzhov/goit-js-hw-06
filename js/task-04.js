const decreaseBtn = document.querySelector('button[data-action="decrement"]');
const increaseBtn = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#value')

console.log(decreaseBtn)
console.log(increaseBtn)
console.log(counter)

let counterValue = 0;
 

counter.textContent = 0;
decreaseBtn.addEventListener('click', () => {
    console.log('Click on decrement')
    counterValue -= 1;
    counter.innerHTML = counterValue;
})

console.log(counterValue)


increaseBtn.addEventListener('click', () => {
    console.log('Click on increment')
    counterValue += 1;
    counter.innerHTML = counterValue;
})


 