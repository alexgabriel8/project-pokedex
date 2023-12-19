// Constants
import { baseUrl } from "../../constants/baseUrl";

// Scripts
import { restructurePkmObjectSpecies } from "./restructurePkmObjectSpecies";

// Types
import { IPokemon } from "../../types/pokemon.types";

async function getPokemonSpecies(input: string | number, pokemon: IPokemon) {
  const response = await fetch(`${baseUrl}pokemon-species/${input}`);
  const json = await response.json();
  return restructurePkmObjectSpecies(pokemon, json);
}

export { getPokemonSpecies };
