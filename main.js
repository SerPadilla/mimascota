// Verificar estado de autenticación y actualizar el botón
document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const authButton = document.getElementById('auth-button');
    
    if (isLoggedIn) {
        authButton.textContent = 'Cerrar Sesión';
        // Actualizar la información del banner
        document.getElementById('cat-name').textContent = localStorage.getItem('catName') || 'Nombre del Gato';
        document.getElementById('cat-address').textContent = `Dirección: ${localStorage.getItem('catAddress') || 'Calle Ejemplo 123'}`;
        document.getElementById('cat-image').src = localStorage.getItem('catImage') || 'default-cat.gif';
    } else {
        authButton.textContent = 'Registro / Inicio de Sesión';
    }

    authButton.addEventListener('click', () => {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (isLoggedIn) {
            // Cerrar sesión
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('catName');
            localStorage.removeItem('catAddress');
            localStorage.removeItem('catImage');
            location.reload();  // Recargar la página para actualizar el estado
        } else {
            location.href = 'registro.html';
        }
    });
});






