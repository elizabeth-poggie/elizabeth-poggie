class Pokemon {
  constructor(name) {
    this.name = null;
    this.abilities = null;
  }

  // public Method to fetch stats asynchronously
  async fetchStats() {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${this.name}`;
      const response = await fetch(url);
      const pokemon = await response.json();
      this.abilities = pokemon.abilities.map((ability) => ability.ability.name);

      console.log("Abilities fetched successfully -  ", this.abilities);
    } catch (error) {
      console.error("This messed up lol: ", error);
    }
  }
}

// Example usage
const myPokemon = new Pokemon("pikachu");
