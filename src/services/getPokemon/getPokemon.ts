// Constants
import { baseUrl } from "../../constants/baseUrl";
const maxPkmId = 1017;

// Scripts
import { restructurePkmObject } from "./restructurePkmObject";

// Types
import { PokeAPI } from "pokeapi-types";

async function getPokemon(input: string | number | null = null) {
  let json: PokeAPI.Pokemon;

  if (!input) {
    const randomId = Math.floor(Math.random() * maxPkmId + 1);

    const response = await fetch(`${baseUrl}pokemon/${randomId}`);
    json = await response.json() as PokeAPI.Pokemon;
  } else {
    const response = await fetch(`${baseUrl}pokemon/${input}`);
    if (response.status === 404)
      throw new Error(`Could not find Pokémon with input "${input}"`);

    json = await response.json() as PokeAPI.Pokemon;
  }

  return restructurePkmObject(json);
}

export { getPokemon };
