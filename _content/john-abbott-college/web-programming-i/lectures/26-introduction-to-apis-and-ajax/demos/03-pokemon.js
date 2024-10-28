// script.js

// Add an event listener to the button
document.getElementById("fetch-button").addEventListener("click", () => {
  // get the pokemon name
  const pokemonName = document
    .getElementById("pokemon-input")
    .value.toLowerCase();
  // pass it to the API fetcher
  fetchPokemonData(pokemonName);
});

// create a fetcher
function fetchPokemonData(name) {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  fetch(url)
    // handle the response appropriately
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Pokémon not found: ${name}`);
      }
      return response.json();
    })
    // display data if all is well
    .then((data) => {
      displayPokemonStats(data);
    })
    // catch errors if things are trash
    .catch((error) => {
      document.getElementById(
        "pokemon-stats"
      ).innerHTML = `<p>${error.message}</p>`;
    });
}

function displayPokemonStats(pokemon) {
  const statsDiv = document.getElementById("pokemon-stats");
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
