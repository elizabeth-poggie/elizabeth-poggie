const pokemonNames = ["ditto", "pikachu", "squirtle", "charizard", "bulbasaur"];

// Create a generic fetch function for reusability
const fetchData = async (urls) => {
  return await Promise.all(
    urls.map(async (url) => {
      const response = await fetch(url);
      return response.json();
    })
  );
};

const main = async () => {
  try {
    // step 1 - get the ids
    const pokemons = await fetchData(
      pokemonNames.map((name) => `https://pokeapi.co/api/v2/pokemon/${name}`)
    );
    // step 2 - extract ids to formulate URLs
    const speciesUrls = pokemons.map((pokemon) => ({
      name: pokemon.name,
      url: `https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}/`,
    }));

    // step 3 - fetch species information
    const speciesData = await fetchData(speciesUrls.map((item) => item.url));

    // step 4 - extract happiness levels
    const results = speciesUrls.map((item, index) => ({
      name: item.name,
      happiness: speciesData[index].base_happiness,
    }));

    // Log the results
    results.forEach((pokemon) => {
      console.log(`${pokemon.name}: Happiness Level - ${pokemon.happiness}`);
    });
  } catch (error) {
    console.log("TRASHHHHHHHH: ", error);
  }
};

main();
