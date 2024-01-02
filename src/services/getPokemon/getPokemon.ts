import { baseUrl } from "../../constants/baseUrl";
import { restructurePkmObject } from "./restructurePkmObject";
const maxPkmId = 1017;

async function getPokemon(input: string | number | null = null) {
  let json;

  if (!input) {
    const randomId = Math.floor(Math.random() * maxPkmId + 1);

    const response = await fetch(`${baseUrl}pokemon/${randomId}`);
    json = await response.json();
  } else {
    const response = await fetch(`${baseUrl}pokemon/${input}`);
    if (response.status === 404)
      throw new Error(`Could not find Pokémon with input "${input}"`);

    json = await response.json();
  }

  return restructurePkmObject(json);
}

export { getPokemon };
