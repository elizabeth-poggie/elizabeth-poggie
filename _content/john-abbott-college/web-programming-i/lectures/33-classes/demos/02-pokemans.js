class Pokemon {
  constructor() {
    this.name = null;
    this.abilities = null;
  }

  set pokemonName(name) {
    this.name = name;
  }

  get pokemonName() {
    return this.name;
  }

  // public Method to fetch stats asynchronously
  async fetchStats() {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${this.name}`;
      const response = await fetch(url);
      const pokemon = await response.json();
      this.abilities = pokemon.abilities.map((ability) => ability.ability.name);
    } catch (error) {
      console.error("This messed up lol: ", error);
    }
  }
}

// Example usage
const main = async () => {
  try {
    const myPokemon = new Pokemon();
    myPokemon.pokemonName = "pikachu";
    await myPokemon.fetchStats();
    console.log(myPokemon.abilities);
  } catch (e) {
    console.log(e);
  }
};

main();
