document.addEventListener('DOMContentLoaded', () => {
    const name = localStorage.getItem('animalName') || 'Mi nombre';
    const address = localStorage.getItem('userAddress') || ' ';
    const phone = localStorage.getItem('userPhone') || ' ';
    const imageUrl = localStorage.getItem('animalImage') || 'imagenes/pequeno-personaje-dibujos-animados-lindo-gato_1308-138075.avif';

    document.getElementById('animal-name').textContent = name;
    document.getElementById('user-address').textContent = `Dirección: ${address}`;
    document.getElementById('user-phone').textContent = `Celular: ${phone}`;
    document.getElementById('animal-image').src = imageUrl;

    const loginBtn = document.getElementById('login-btn');
    if (name === 'Mi nombre') {
        loginBtn.textContent = 'Registrar';
        loginBtn.href = 'registro.html';
    } else {
        loginBtn.textContent = 'Cerrar sesión';
        loginBtn.href = 'index.html'; // Actualizamos la URL para que redirija al inicio

        loginBtn.addEventListener('click', () => {
            // Limpiar los datos de localStorage
            localStorage.removeItem('animalName');
            localStorage.removeItem('userAddress');
            localStorage.removeItem('userPhone');
            localStorage.removeItem('animalImage');

            // Redirigir a la página principal
            window.location.href = 'index.html';
        });
    }
});




