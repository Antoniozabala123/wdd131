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



document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;



