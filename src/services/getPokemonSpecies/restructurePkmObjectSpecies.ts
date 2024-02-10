import { PokeAPI } from "pokeapi-types";
import { IPokemon, SpeciesInfo } from "@typings/pokemon.types";

function restructurePkmObjectSpecies(pokemon: IPokemon, species: PokeAPI.PokemonSpecies) {
  pokemon.speciesInfo = {} as unknown as SpeciesInfo;

  pokemon.speciesInfo.generation = species.generation.name.replace(
    "generation-",
    "",
  );
  pokemon.speciesInfo.habitat = species.habitat?.name ?? "Unknown";

  pokemon.speciesInfo.description = "No description available."
  for (let i = 0; i < species.flavor_text_entries.length; i++) {
    if (species.flavor_text_entries[i].language.name === "en") {
      pokemon.speciesInfo.description =
        species.flavor_text_entries[i].flavor_text;
      i = species.flavor_text_entries.length;
    }
  }

  for (let i = 0; i < species.genera.length; i++) {
    if (species.genera[i].language.name === "en") {
      pokemon.speciesInfo.genera = species.genera[i].genus.match(/\w+/i)![0];
      i = species.genera.length;
    }
  }

  return pokemon;
}

export { restructurePkmObjectSpecies };
