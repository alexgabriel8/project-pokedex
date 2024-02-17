// Components
import { useContext } from "react";
import { Pokemon } from "./Pokemon/Pokemon";

// Context
import { PokemonsContext } from "@context/PokemonsContext/PokemonsContext";
import { PkmListStatusContext } from "@context/PokemonListContext/PkmListStatusContext";

// Scripts
import { filterPokemons } from "./scripts/filterPokemons";

// Hooks
import { useUpdatePkmAmountInlist } from "./hooks/useUpdatePkmAmountInList";

const Pokemons = () => {
  const { pokemons } = useContext(PokemonsContext);
  const { pkmListStatus, setPkmListStatus } = useContext(PkmListStatusContext);
  
  pokemons.map((pokemon, i) => pokemon.index = i);

  const { type1, type2 } = pkmListStatus.filter;
  const filteredPokemons = type1 ? filterPokemons(pokemons, type1, type2) : pokemons;

  useUpdatePkmAmountInlist(filteredPokemons.length, pokemons.length, setPkmListStatus);

  return (
    <ul>
      {
        filteredPokemons.map((pokemon) => (
          <Pokemon
            pokemon={pokemon}
            key={pokemon.index}
          />
        ))
      }
    </ul>
  );
};

export { Pokemons };
