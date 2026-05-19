document.getElementById("lastModified").innerHTML = document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav'); 

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');

    // Cambiar el texto del botón
    hamButton.textContent = navigation.classList.contains('open') ? 'X' : '☰';
});
