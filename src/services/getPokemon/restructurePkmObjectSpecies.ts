import { IPokemon, SpeciesInfo } from "../../types/pokemon.types";

function restructurePkmObjectSpecies(pokemon: IPokemon, species: any) {
  pokemon.speciesInfo = {} as unknown as SpeciesInfo;

  pokemon.speciesInfo.generation = species.generation.name;
  pokemon.speciesInfo.habitat = species.habitat.name;

  for (let i = 0; i < species.flavor_text_entries.length; i++) {
    if (species.flavor_text_entries[i].language.name === "en") {
      pokemon.speciesInfo.description =
        species.flavor_text_entries[i].flavor_text;
      i = species.flavor_text_entries.length;
    }
  }

  for (let i = 0; i < species.genera.length; i++) {
    if (species.genera[i].language.name === "en") {
      pokemon.speciesInfo.genera = species.genera[i].genus;
      i = species.genera.length;
    }
  }

  return pokemon;
}

export { restructurePkmObjectSpecies };
