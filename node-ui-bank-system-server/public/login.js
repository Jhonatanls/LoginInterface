"use strict";
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
document.getElementsByClassName('login-form')[0].addEventListener('submit', (event) => {
    event.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach((element) => {
        element.classList.add('hidden');
    }); // Hide all error messages
    if (username.trim() === '') {
        showErrorMessage(usernameInput);
        return;
    }
    if (password.trim() === '') {
        showErrorMessage(passwordInput);
        return;
    }
});
const showErrorMessage = (inputElement) => {
    const errorMessage = inputElement.nextElementSibling;
    errorMessage.classList.remove('hidden');
};
//# sourceMappingURL=login.js.map