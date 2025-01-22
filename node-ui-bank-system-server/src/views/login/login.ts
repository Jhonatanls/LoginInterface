const usernameInput = document.getElementById('username') as HTMLInputElement;
const passwordInput = document.getElementById('password') as HTMLInputElement;

document.getElementsByClassName('login-form')[0].addEventListener('submit', (event) => {    
    event.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach((element) => {
    element.classList.add('hidden');
    }); // Hide all error messages

    if(username.trim() === '') {
        showErrorMessage(usernameInput);
        return;
    }

    if(password.trim() === '') {
        showErrorMessage(passwordInput);
        return;
    }
});

const showErrorMessage = (inputElement: HTMLInputElement) => {
    const errorMessage = inputElement.nextElementSibling as HTMLElement;
    errorMessage.classList.remove('hidden');
}