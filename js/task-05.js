const inputValue = document.querySelector('#name-input')
const spanName = document.querySelector('#name-output')


inputValue.addEventListener('input', onInputChange)
 

function onInputChange(event) {
    if (inputValue.value  === '') {
        spanName.textContent = 'Anonymous'
    } else {
        spanName.textContent = event.currentTarget.value;
    }
}

 