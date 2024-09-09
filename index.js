document.addEventListener('DOMContentLoaded', () => {
    const authButton = document.getElementById('auth-button');
    const catName = localStorage.getItem('catName');
    const catAddress = localStorage.getItem('catAddress');
    const catPhone = localStorage.getItem('catPhone');
    const catPhoto = localStorage.getItem('catPhoto');

    if (catName) {
        document.getElementById('cat-name').textContent = catName;
        document.getElementById('cat-address').textContent = `Dirección: ${catAddress}`;
        document.getElementById('cat-phone').textContent = `Celular: ${catPhone}`;
    }

    if (catPhoto) {
        document.getElementById('banner-image').src = catPhoto;
    }

    // Mostrar el texto correcto en el botón
    if (localStorage.getItem('loggedIn') === 'true') {
        authButton.textContent = 'Cerrar Sesión';
    } else {
        authButton.textContent = 'Registro / Inicio de Sesión';
    }

    // Manejar el clic en el botón
    authButton.addEventListener('click', () => {
        if (localStorage.getItem('loggedIn') === 'true') {
            // Cerrar sesión
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('catName');
            localStorage.removeItem('catAddress');
            localStorage.removeItem('catPhone');
            localStorage.removeItem('catPhoto');
            document.getElementById('cat-name').textContent = 'Nombre del Gato';
            document.getElementById('cat-address').textContent = 'Dirección: Calle Ejemplo 123';
            document.getElementById('cat-phone').textContent = 'Celular: +123456789';
            document.getElementById('banner-image').src = '/imagenes/ilustracion-icono-vector-dibujos-animados-lindo-gato-sentado-concepto-icono-naturaleza-animal-aislado-premium-vector-estilo-dibujos-animados-plana_138676-4148.avif';
            authButton.textContent = 'Registro / Inicio de Sesión';
        } else {
            // Redirigir a la página de registro
            window.location.href = 'registro.html';
        }
    });

    document.getElementById('comida-box').addEventListener('click', () => {
        window.location.href = 'comida.html';
    });
});




