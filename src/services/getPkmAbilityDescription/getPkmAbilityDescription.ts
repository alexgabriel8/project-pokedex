import { PokeAPI } from "pokeapi-types";

async function getPkmAbilityDescription(url: string) {
  const response = await fetch(url);
  if (response.status === 404)
    throw new Error(`Ability from URL "${url}" not found`);

  const json = await response.json() as PokeAPI.Ability;

  if (json.effect_entries.length === 0) return "No description available.";

  for (let i = 0; i < json.effect_entries.length; i++) {
    if (json.effect_entries[i].language.name === "en")
      return json.effect_entries[i].effect;
  }
}

export { getPkmAbilityDescription };
