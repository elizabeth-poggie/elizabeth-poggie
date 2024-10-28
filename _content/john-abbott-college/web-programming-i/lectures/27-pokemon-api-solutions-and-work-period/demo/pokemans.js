// pokemans.js

// Step 1 - Add an event listener to the button
document.getElementById("fetch-button").addEventListener("click", () => {
  // Step 2 - Get the Pokémon name
  const pokemonName = document
    .getElementById("pokemon-input")
    .value.toLowerCase();

  // Step 3 - call the API
  fetchPokemonData(pokemonName);
});

// Step 4 - implement the API fetched logic
function fetchPokemonData(name) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    // Step 5 - Handle the response if it's not trash
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Pokémon not found: ${name}`);
      }
      return response.json();
    })
    // Step 6 - If the JSON parsing succeeds, display
    .then((data) => {
      displayPokemonStats(data);
    })
    // This step shouldn't happen unless the user entered trash
    .catch((error) => {
      document.getElementById(
        "pokemon-stats"
      ).innerHTML = `<p>${error.message}</p>`;
    });
}

// Step 7 - display stats
function displayPokemonStats(pokemon) {
  const statsDiv = document.getElementById("pokemon-stats");

  // inject stats dynamically :^)
  statsDiv.innerHTML = `
          <h2>${pokemon.name.toUpperCase()}</h2>
          <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
          <h3>Stats:</h3>
          <ul>
              ${pokemon.stats
                .map((stat) => `<li>${stat.stat.name}: ${stat.base_stat}</li>`)
                .join("")}
          </ul>
      `;
}
