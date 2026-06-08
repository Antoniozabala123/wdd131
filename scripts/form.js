document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;
        
    const products = [
    {id: "banana", name: "banana" },
    {id: "apple", name: "apple" },
    {id: "orange", name: "orange" },
    {id: "lemon", name: "lemon" }
    ];

        
        const selectElement = document.getElementById("product");
        products.forEach(product => {
            const option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        selectElement.appendChild(option);
        });