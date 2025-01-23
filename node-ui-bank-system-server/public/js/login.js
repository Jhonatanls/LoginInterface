"use strict";
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const form = document.getElementsByClassName('login-form')[0];
const formErrorsContainer = document.getElementById("form-errors");
const formErrorsText = formErrorsContainer.querySelector("p");


form.addEventListener('submit', (event) => {
    
    const username = usernameInput.value;
    const password = passwordInput.value;
    let errors = false;

    // Limpiar mensajes de error previos
    clearErrors();    

    if (username.trim() === '') {
        errors = true;
        event.preventDefault();
        showFormError("El usuario es requerido.");
    }
    if (password.trim() === '') {
        errors = true;
        event.preventDefault();
        showFormError("La contraseña es requerida.");
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

const cancelButton = document.querySelector('.cancel-button');
        cancelButton.addEventListener('click', () => {
            window.location.href = '/register';
        });




//# sourceMappingURL=login.js.map