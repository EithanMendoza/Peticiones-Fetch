document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('search').value;
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
        .then(response => response.json())
        .then(data => {
            const productsContainer = document.getElementById('products');
            productsContainer.innerHTML = '';
            data.results.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'col-md-4 product-card';
                productCard.innerHTML = `
                    <img src="${product.thumbnail}" class="img-fluid" alt="${product.title}">
                    <h5>${product.title}</h5>
                    <p>Precio: ${product.price}</p>
                `;
                productsContainer.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error:', error));
});
