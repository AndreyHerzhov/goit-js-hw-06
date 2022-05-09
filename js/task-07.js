const sizeValue = document.querySelector('#font-size-control')
const textToChange = document.querySelector('#text')

 

  
sizeValue.addEventListener('input', function() {
    const sizeToChange = Number(sizeValue.value)
    textToChange.style.fontSize =  `${sizeToChange}px`;
})

