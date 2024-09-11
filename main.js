document.addEventListener('DOMContentLoaded', () => {
    const name = localStorage.getItem('animalName') || 'Mi nombre';
    const address = localStorage.getItem('userAddress') || ' ';
    const phone = localStorage.getItem('userPhone') || ' ';
    const due = localStorage.getItem('userDue') || ' ';
    const imageUrl = localStorage.getItem('animalImage') || 'imagenes/pequeno-personaje-dibujos-animados-lindo-gato_1308-138075.avif';

    document.getElementById('animal-name').textContent = name;
    document.getElementById('user-address').textContent = `Dirección: ${address}`;
    document.getElementById('user-due').textContent = `Mi Dueña: ${due}`;
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
            localStorage.removeItem('userDue');
            localStorage.removeItem('userAddress');
            localStorage.removeItem('userPhone');
            localStorage.removeItem('animalImage');

            // Redirigir a la página principal
            window.location.href = 'index.html';
        });
    }
});


// Cuadro del index carga de información del datos de alimentación//

document.getElementById('feeding-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita que el formulario se envíe normalmente

    // Captura los datos del formulario
    const breakfastTime = document.getElementById('breakfast-time').value;
    const lunchTime = document.getElementById('lunch-time').value;
    const dinnerTime = document.getElementById('dinner-time').value;
    const bathroomFrequency = document.getElementById('bathroom-frequency').value;

    // Guarda los datos en localStorage
    localStorage.setItem('breakfastTime', breakfastTime);
    localStorage.setItem('lunchTime', lunchTime);
    localStorage.setItem('dinnerTime', dinnerTime);
    localStorage.setItem('bathroomFrequency', bathroomFrequency);

    // Redirige a index.html
    window.location.href = 'index.html';
});

