const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');


hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');


    hamButton.textContent = navigation.classList.contains('open') ? 'X' : '☰';
});


const products = [
    {
        id: "fc-1888",
        name: "basic",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "intermediate",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "advance",
        averagerating: 3.5
    },
];


document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = `${product.name} (${product.averagerating})`;
        productSelect.appendChild(option);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    const displayElement = document.getElementById("reviewDisplay");

    // ESCENARIO A: Si el usuario está en la página del formulario
    if (contactForm) {
        contactForm.addEventListener("submit", () => {
            // Solo sumamos cuando el usuario hace clic de verdad en "Enviar/Subscribe"
            let reviewCount = parseInt(localStorage.getItem("reviewCounter")) || 0;
            reviewCount += 1;
            localStorage.setItem("reviewCounter", reviewCount);
        });
    }

    // ESCENARIO B: Si el usuario ya está en la página de agradecimiento (thank.html)
    if (displayElement) {
        // Solo leemos el valor actual del localStorage, NO sumamos aquí
        const currentCount = localStorage.getItem("reviewCounter") || 0;
        displayElement.textContent = currentCount;
    }
});


document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;



