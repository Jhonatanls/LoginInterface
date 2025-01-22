var usernameInput = document.getElementById('username');
var passwordInput = document.getElementById('password');
document.getElementsByClassName('login-form')[0].addEventListener('submit', function (event) {
    event.preventDefault();
    var username = usernameInput.value;
    var password = passwordInput.value;
    var errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function (element) {
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
var showErrorMessage = function (inputElement) {
    var errorMessage = inputElement.nextElementSibling;
    errorMessage.classList.remove('hidden');
};
