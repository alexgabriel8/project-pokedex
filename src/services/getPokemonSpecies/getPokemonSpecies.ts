// Constants
import { baseUrl } from "../../constants/baseUrl";

// Scripts
import { restructurePkmObjectSpecies } from "./restructurePkmObjectSpecies";

// Types
import { IPokemon } from "../../types/pokemon.types";
import { PokeAPI } from "pokeapi-types";

async function getPokemonSpecies(input: string | number, pokemon: IPokemon) {
  const response = await fetch(`${baseUrl}pokemon-species/${input}`);
  const json = await response.json() as PokeAPI.PokemonSpecies;
  
  return restructurePkmObjectSpecies(pokemon, json);
}

export { getPokemonSpecies };
