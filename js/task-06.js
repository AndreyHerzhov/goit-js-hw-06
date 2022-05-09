const inputToCheck = document.querySelector('#validation-input')
const lengthData = document.querySelector('input[data-length="6"]');

const lengthToCheck = Number(inputToCheck.dataset.length)
 

 
inputToCheck.addEventListener('blur', function () {
    const inputLength = inputToCheck.value.length;
    if (lengthToCheck === inputLength) {
        inputToCheck.classList.add('valid')
        inputToCheck.classList.remove('invalid')
    } else { 
        inputToCheck.classList.remove('valid')
        inputToCheck.classList.add('invalid')
    }
    
   
})

 

