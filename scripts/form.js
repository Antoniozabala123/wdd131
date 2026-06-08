document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;


    const products = [
        { id: "banana", name: "banana", averagerating: 4.5 },
        { id: "apple", name: "apple", averagerating: 4.6 },
        { id: "orange", name: "orange", averagerating: 4.7 },
        { id: "lemon", name: "lemon", averagerating: 4.8 },
    ];

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.name;
        option.textContent = `${product.name} (${product.averagerating})`;
        productSelect.appendChild(option);
    });
});
