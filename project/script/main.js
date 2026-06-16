const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');


hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');


    hamButton.textContent = navigation.classList.contains('open') ? 'X' : '☰';
});

document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

