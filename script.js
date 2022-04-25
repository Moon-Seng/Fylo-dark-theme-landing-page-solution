let email = document.querySelector('.email-input');
let button = document.querySelector('.submit-input');
let error = document.querySelector('.error-message')

button.addEventListener('click' , function(){
    if(email.value == ""){
        error.classList.remove('hidden');
    }
    email.value = '';
})