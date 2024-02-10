import { IPokemon } from "@typings/pokemon.types";

const isPokemonInList = (pokemons: IPokemon[], urlId: string | number) => {
  let pokemonInList = null;

  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].name === urlId || pokemons[i].id === +urlId) {
      pokemonInList = pokemons[i];

      i = pokemons.length;
    }
  }

  return pokemonInList;
};

export { isPokemonInList };
