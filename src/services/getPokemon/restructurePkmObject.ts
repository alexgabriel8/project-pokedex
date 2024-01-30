import { Stats, IPokemon } from "../../types/pokemon.types";
import { PokeAPI } from "pokeapi-types";

function restructurePkmObject(pokemon: PokeAPI.Pokemon): IPokemon {
  const newPkm = {
    abilities: [],
    moves: [],
    stats: {},
    sprites: {},
    types: {},
  } as unknown as IPokemon;

  newPkm.name = pokemon.name;
  newPkm.height = pokemon.height;
  newPkm.weight = pokemon.weight;
  newPkm.id = pokemon.id;

  pokemon.abilities.forEach((ability: PokeAPI.PokemonAbility) => {
    newPkm.abilities.push({
      name: ability.ability.name,
      url: ability.ability.url,
      isHidden: ability.is_hidden,
    });
  });

  pokemon.moves.forEach((move: PokeAPI.PokemonMove) => {
    newPkm.moves.push({
      name: move.move.name,
      url: move.move.url,
    });
  });

  newPkm.sprites.static = pokemon.sprites.front_default;

  newPkm.sprites.artwork =
    pokemon.sprites.other?.["official-artwork"]?.front_default ?? null;

  newPkm.sprites.animated =
    pokemon.sprites.versions?.["generation-v"]?.["black-white"]?.animated // @ts-expect-error - pokeapi-types don't have animated in its type definitions
      ?.front_default as string ?? null;

  pokemon.stats.forEach((stat: PokeAPI.PokemonStat) => {
    if (stat.stat.name === "special-attack")
      newPkm.stats.spAttack = stat.base_stat;
    else if (stat.stat.name === "special-defense")
      newPkm.stats.spDefense = stat.base_stat;
    else newPkm.stats[stat.stat.name as keyof Stats] = stat.base_stat;
  });

  newPkm.types.primary = pokemon.types[0].type.name;
  newPkm.types.secondary = pokemon.types[1]?.type?.name ?? null;

  return newPkm;
}

export { restructurePkmObject };
