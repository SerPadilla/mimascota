let isLoggedIn = false;

document.addEventListener('DOMContentLoaded', () => {
    updateAuthButton();
    updateBannerFromLocalStorage();
});

function handleAuth() {
    if (isLoggedIn) {
        // Simula el cierre de sesión
        isLoggedIn = false;
        localStorage.removeItem('catData');
        updateBannerFromLocalStorage();
        updateAuthButton();
    } else {
        window.location.href = 'registro.html';
    }
}

function updateBannerFromLocalStorage() {
    const catData = JSON.parse(localStorage.getItem('catData'));
    if (catData) {
        document.getElementById('cat-name').textContent = catData.name || 'Nombre del Gato';
        document.getElementById('cat-address').textContent = catData.address || 'Dirección';
        document.getElementById('cat-phone').textContent = catData.phone || 'Celular';
        const catImage = document.getElementById('cat-image');
        if (catData.photo) {
            catImage.src = catData.photo;
        }
    }
}

function updateBannerImage() {
    const fileInput = document.getElementById('cat-photo');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            localStorage.setItem('catData', JSON.stringify({
                name: document.getElementById('cat-name-input').value,
                address: document.getElementById('cat-address').value,
                phone: document.getElementById('cat-phone').textContent,
                photo: e.target.result
            }));
            updateBannerFromLocalStorage();
        }
        reader.readAsDataURL(file);
    }
}

function updateAuthButton() {
    const button = document.getElementById('auth-button');
    button.textContent = isLoggedIn ? 'Cerrar Sesión' : 'Registro / Inicio de Sesión';
}

