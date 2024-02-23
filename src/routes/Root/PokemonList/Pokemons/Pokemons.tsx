// Components
import { useContext } from "react";
import { Pokemon } from "./Pokemon/Pokemon";

// Context
import { PokemonsContext } from "@context/PokemonsContext/PokemonsContext";
import { PkmListStatusContext } from "@context/PokemonListContext/PkmListStatusContext";

// Scripts
import { filterPokemons } from "./scripts/filterPokemons";
import { sortPokemons } from "./scripts/sortPokemons";

// Hooks
import { useUpdatePkmAmountInlist } from "./hooks/useUpdatePkmAmountInList";

const Pokemons = () => {
  const { pokemons } = useContext(PokemonsContext);
  const { pkmListStatus } = useContext(PkmListStatusContext);

  const { type1, type2 } = pkmListStatus.filter;
  const { by, order } = pkmListStatus.sort;

  pokemons.map((pokemon, i) => (pokemon.index = i));

  const filteredPokemons =
    type1 || type2 ? filterPokemons(pokemons, type1, type2) : [...pokemons];

  if (by && order) sortPokemons(filteredPokemons, by, order);

  useUpdatePkmAmountInlist(filteredPokemons.length, pokemons.length);

  return (
    <ul>
      {filteredPokemons.map((pokemon) => (
        <Pokemon pokemon={pokemon} key={pokemon.index} />
      ))}
    </ul>
  );
};

export { Pokemons };
