"use strict";
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function validateName(name) {
    const nameRegex = /^[A-Za-z]+$/;
    return nameRegex.test(name);
}
function validateRegisterForm(form) {
    const errors = [];
    if (!form.username) {
        errors.push("El usuario no puede ser nulo.");
    }
    if (!form.email) {
        errors.push("El correo no puede ser nulo.");
    }
    else if (!validateEmail(form.email)) {
        errors.push("El formato del correo es inválido.");
    }
    if (!form.name) {
        errors.push("El nombre no puede ser nulo.");
    }
    else if (!validateName(form.name)) {
        errors.push("El nombre solo puede contener letras.");
    }
    if (!form.password) {
        errors.push("La contraseña no puede ser nula.");
    }
    if (form.password !== form.confirmPassword) {
        errors.push("Las contraseñas no coinciden.");
    }
    return errors;
}
document.addEventListener("DOMContentLoaded", () => {
    const formElement = document.querySelector("form");
    const usernameInput = document.getElementById('username');
    const emailInput = document.querySelector('email');
    const nameInput = document.querySelector('name');
    const passwordInput = document.querySelector('password');
    const confirmPasswordInput = document.querySelector('confirmPassword');
    const errorContainer = document.querySelector('errorContainer');
    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = {
            username: usernameInput.value,
            email: emailInput.value,
            name: nameInput.value,
            password: passwordInput.value,
            confirmPassword: confirmPasswordInput.value
        };
        const errors = validateRegisterForm(form);
        errorContainer.innerHTML = "";
        if (errors.length > 0) {
            errors.forEach(error => {
                const errorElement = document.createElement("p");
                errorElement.textContent = error;
                errorContainer.appendChild(errorElement);
            });
        }
        else {
            console.log("Formulario válido");
            // Aquí puedes agregar la lógica para enviar el formulario al servidor
        }
    });
});
//# sourceMappingURL=register.js.map