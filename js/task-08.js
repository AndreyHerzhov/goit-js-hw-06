
const form = document.querySelector('.login-form')
const email = document.querySelector('input[type="email"]')
const password = document.querySelector('input[type="password"]')
 


form.addEventListener('submit', function(event) {
    event.preventDefault();
    email.textContent = event.currentTarget;
    password.textContent = event.currentTarget;

    if (email.value === "" || password.value === "") {
       return alert("Заповніть всі поля");
      }
      console.log(`Login: ${email.value}, Password: ${password.value}`);
      event.currentTarget.reset();
})

 