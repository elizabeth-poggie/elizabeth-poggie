const urls = [
  "https://pokeapi.co/api/v2/pokemon/ditto",
  "https://pokeapi.co/api/v2/pokemon/pikachu",
  "https://pokeapi.co/api/v2/pokemon/squirtle",
];

const pokemons = [];

const pokemonLoop = async () => {
  for await (const url of urls) {
    const pokemon = await fetch(url);
    pokemons.push(pokemon);
  }
};

await pokemonLoop();

console.log(pokemons);
