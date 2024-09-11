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
