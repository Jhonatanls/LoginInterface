"use strict";
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const form = document.getElementsByClassName('login-form')[0];
const formErrorsContainer = document.getElementById("form-errors");
const formErrorsText = formErrorsContainer.querySelector("p");


form.addEventListener('submit', (event) => {
    
    const username = usernameInput.value;
    const password = passwordInput.value;
    let hasError = false;

    // Limpiar mensajes de error previos
    clearErrors();    

    if (username.trim() === '') {
        showFormError("El usuario es requerido.");
        hasError = true;
    }
    if (password.trim() === '') {
        showFormError("La contraseña es requerida.");
        hasError = true;
    }

    if(hasError) {
        event.preventDefault();
        showFormError("Por favor, completa los campos obligatorios.");
        return;
    }
});


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



//# sourceMappingURL=login.js.map