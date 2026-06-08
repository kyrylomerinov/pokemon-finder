const searchBtn = document.getElementById('search-btn');
const randomBtn = document.getElementById('random-btn');
const pokemonNameInput = document.getElementById('pokemon-name');
const pokemonCard = document.getElementById('pokemon-card');
const errorMsg = document.getElementById('error-msg');

searchBtn.addEventListener('click', getPokemonData);
randomBtn.addEventListener('click', getRandomPokemon);

pokemonNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') getPokemonData();
});

async function getPokemonData() {
    const name = pokemonNameInput.value.toLowerCase().trim();
    
    if (!name) return;

    pokemonCard.classList.add('hidden');
    errorMsg.classList.add('hidden');

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        
        if (!response.ok) {
            throw new Error('Pokémon ikke funnet');
        }

        const data = await response.json();
        displayPokemon(data);
        
    } catch (error) {
        errorMsg.classList.remove('hidden');
    }
}

async function getRandomPokemon() {
    const randomId = Math.floor(Math.random() * 1025) + 1;
   
    pokemonNameInput.value = '';
    
    pokemonCard.classList.add('hidden');
    errorMsg.classList.add('hidden');
   
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        
        if (!response.ok) {
            throw new Error('Kunne ikke hente tilfeldig Pokémon');
        }
   
        const data = await response.json();
        displayPokemon(data);
        
    } catch (error) {
        errorMsg.classList.remove('hidden');
    }
}

function displayPokemon(data) {
    const name = data.name.toUpperCase();
    const sprite = data.sprites.front_default;
    const hp = data.stats[0].base_stat;
    const attack = data.stats[1].base_stat;
    const defense = data.stats[2].base_stat;
    const types = data.types.map(t => t.type.name).join(', ');

    pokemonCard.innerHTML = `
        <img src="${sprite}" alt="${name}">
        <h2>${name}</h2>
        <p class="type"><strong>Type:</strong> ${types}</p>
        <div class="stats">
            <p><strong>HP:</strong> ${hp}</p>
            <p><strong>Attack:</strong> ${attack}</p>
            <p><strong>Defense:</strong> ${defense}</p>
        </div>
    `;

    pokemonCard.classList.remove('hidden');
}