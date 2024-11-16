/**
 * Create a Pokémon class that includes both a getter and setter for the `name` field.
 * Include a regular method to fetch its abilities.
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

class Pokemon {
  // TODO - Poggie to demo 2 class

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
