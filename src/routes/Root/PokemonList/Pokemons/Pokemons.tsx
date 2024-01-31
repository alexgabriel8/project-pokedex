// Components
import { Pokemon } from "./Pokemon/Pokemon";

// Types
import { IPokemon } from "../../../../types/pokemon.types";

type Props = {
  pokemons: IPokemon[];
};
const Pokemons = ({ pokemons }: Props) => (
  <ul>
    {
      pokemons.map((pokemon, i) => (
        <Pokemon
          pokemon={pokemon}
          pkmIndex={i}
          key={pokemon.id + ` ${Math.random() * 10}`}
        />
      ))
    }
  </ul>
);

export { Pokemons };
