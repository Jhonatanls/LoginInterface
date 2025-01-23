"use strict";
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const form = document.getElementsByClassName('register-form')[0];
const formErrorsContainer = document.getElementById('form-errors');
const formErrorsText = formErrorsContainer.querySelector('p');

form.addEventListener('submit', (event) => {
    const name = nameInput.value;
    const email = emailInput.value;
    const username = usernameInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    let errors = false;

    // Limpiar mensajes de error previos
    clearErrors();

    if (name.trim() === '') {
        event.preventDefault();
        showFormError("El nombre es requerido.");
        errors = true;
    } else if(!validateName(name)) {
        event.preventDefault();
        showFormError("El nombre no es válido.");
        errors = true;
    }

    if (email.trim() === '') {
        event.preventDefault();
        showFormError("El correo es requerido.");
        errors = true;
    }else if(!validateEmail(email)) {
        event.preventDefault();
        showFormError("El correo no es válido.");
        errors = true;
    }

    if (username.trim() === '') {
        event.preventDefault();
        showFormError("El usuario es requerido.");
        errors = true;
    }   

    if (password.trim() === '') {
        event.preventDefault();
        showFormError("La contraseña es requerida.");
        errors = true;
    }
    
    if (confirmPassword.trim() === '') {
        event.preventDefault();
        showFormError("La confirmación de contraseña es requerida.");
        errors = true;

    } else if (password !== confirmPassword) { 
        event.preventDefault();
        showFormError("Las contraseñas no coinciden.");
        errors = true;
    }

    // Mostrar el spinner si no hay errores
    if (!errors) {
        event.preventDefault(); // Detener temporalmente el envío del formulario
        showLoading();

        setTimeout(() => {
            hideLoading(); // Ocultar el spinner después de 2 segundos
            form.submit(); // Enviar el formulario después de mostrar el spinner
        }, 500);
    }

});

// Función para mostrar el spinner
function showLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.classList.remove("hidden");
    }
}

// Función para ocultar el spinner
function hideLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.classList.add("hidden");
    }
}

function clearErrors() {
    // Ocultar errores de los campos
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((element) => element.classList.add("hidden"));

    // Limpiar el contenedor de errores generales
    formErrorsContainer.classList.add("hidden");
    formErrorsText.textContent = "";
}

function showFormError(message) {
    formErrorsText.textContent = message;
    formErrorsContainer.classList.remove("hidden");
}

// Función para cerrar el mensaje de error
function closeError() {
    const errorContainer = document.getElementById('form-errors');
    errorContainer.classList.add('hidden');
}

// Validación de correo electrónico
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function validateName(name) {
    const nameRegex = /^[A-Za-z]+$/;
    return nameRegex.test(name);
}

//# sourceMappingURL=register.js.map