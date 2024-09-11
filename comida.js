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


const breakfastTime = localStorage.getItem('breakfastTime') || '--:--';
const lunchTime = localStorage.getItem('lunchTime') || '--:--';
const dinnerTime = localStorage.getItem('dinnerTime') || '--:--';
const bathroomFrequency = localStorage.getItem('bathroomFrequency') || 'N/A';

// Mostrar los horarios en el cuadro
document.getElementById('mini-breakfast-time').textContent = breakfastTime;
document.getElementById('mini-lunch-time').textContent = lunchTime;
document.getElementById('mini-dinner-time').textContent = dinnerTime;
document.getElementById('mini-bathroom-frequency').textContent = bathroomFrequency;
