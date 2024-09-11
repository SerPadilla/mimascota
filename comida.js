document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feeding-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const breakfastTime = document.getElementById('breakfast-time').value;
        const lunchTime = document.getElementById('lunch-time').value;
        const dinnerTime = document.getElementById('dinner-time').value;
        const bathroomFrequency = document.getElementById('bathroom-frequency').value;

        localStorage.setItem('breakfastTime', breakfastTime);
        localStorage.setItem('lunchTime', lunchTime);
        localStorage.setItem('dinnerTime', dinnerTime);
        localStorage.setItem('bathroomFrequency', bathroomFrequency);

        alert('Datos guardados exitosamente');
    });
});

// Cuadro del index carga de información del datos de alimentación//


window.onload = function() {
    // Recupera los datos de localStorage
    const breakfastTime = localStorage.getItem('breakfastTime') || '--:--';
    const lunchTime = localStorage.getItem('lunchTime') || '--:--';
    const dinnerTime = localStorage.getItem('dinnerTime') || '--:--';
    const bathroomFrequency = localStorage.getItem('bathroomFrequency') || 'N/A';

    // Asigna los datos a los elementos del DOM
    document.getElementById('breakfast-time-display').textContent = breakfastTime;
    document.getElementById('lunch-time-display').textContent = lunchTime;
    document.getElementById('dinner-time-display').textContent = dinnerTime;
    document.getElementById('bathroom-frequency-display').textContent = bathroomFrequency;
};
