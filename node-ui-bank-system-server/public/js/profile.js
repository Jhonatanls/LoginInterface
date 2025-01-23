const userData = localStorage.getItem('user');

if (userData) {
    const data = JSON.parse(userData);
    console.log(data);
} else {
    console.log('No se encontraron datos de usuario en localStorage.');
    document.getElementById('email-error').textContent = 'Correo o contraseña incorrectos';
}