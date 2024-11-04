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
    // step 2 - extract ids
    const ids = pokemons.map((pokemon) => pokemon.id);

    console.log(ids);

    // log all the mapped information
  } catch (error) {
    console.log("TRASHHHHHHHH: ", error);
  }
};

main();
