document.getElementById('registro-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const due = document.getElementById('due').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const photo = document.getElementById('photo').files[0];

    if (photo) {
        const reader = new FileReader();
        reader.onloadend = function () {
            localStorage.setItem('animalImage', reader.result);
        };
        reader.readAsDataURL(photo);
    }

    localStorage.setItem('animalName', name);
    localStorage.setItem('userDue', due);
    localStorage.setItem('userAddress', address);
    localStorage.setItem('userPhone', phone);
   

    window.location.href = 'index.html';
});


