document.getElementById('searchButton').addEventListener('click', function() {
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => {
            const pokemonContainer = document.getElementById('pokemon');
            pokemonContainer.innerHTML = `
                <div class="pokemon-card">
                    <img src="${data.sprites.front_default}" class="img-fluid" alt="${data.name}">
                    <h5>${data.name}</h5>
                    <p>Altura: ${data.height / 10} m</p>
                    <p>Peso: ${data.weight / 10} kg</p>
                    <p>Tipos:</p>
                    <div>
                        ${data.types.map(type => `<span class="pokemon-type">${type.type.name}</span>`).join('')}
                    </div>
                </div>
            `;
        })
        .catch(error => {
            const pokemonContainer = document.getElementById('pokemon');
            pokemonContainer.innerHTML = `<p class="text-danger">Pokémon no encontrado</p>`;
            console.error('Error:', error);
        });
});
