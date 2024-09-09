document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('register-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;
        const photo = document.getElementById('photo').files[0];
        
        localStorage.setItem('catName', name);
        localStorage.setItem('catAddress', address);
        localStorage.setItem('catPhone', phone);
        
        if (photo) {
            const reader = new FileReader();
            reader.onload = function(event) {
                localStorage.setItem('catPhoto', event.target.result);
                // Marcar al usuario como registrado
                localStorage.setItem('loggedIn', 'true');
                window.location.href = 'index.html';
            };
            reader.readAsDataURL(photo);
        } else {
            // Marcar al usuario como registrado
            localStorage.setItem('loggedIn', 'true');
            window.location.href = 'index.html';
        }
    });
});








