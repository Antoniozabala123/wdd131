console.log("review.js loaded successfully")
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
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
    // 1. Obtiene el número actual de reseñas guardadas (o empieza en 0)
    let reviewCount = parseInt(localStorage.getItem("reviewCounter")) || 0;

    // 2. Suma 1 porque el usuario completó el formulario con éxito
    reviewCount += 1;

    // 3. Guarda el nuevo número actualizado en el localStorage del navegador
    localStorage.setItem("reviewCounter", reviewCount);

    // 4. Muestra el número en el HTML (busca el elemento con id="reviewDisplay")
    const displayElement = document.getElementById("reviewDisplay");
    if (displayElement) {
        displayElement.textContent = reviewCount;
    }
});

document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;
