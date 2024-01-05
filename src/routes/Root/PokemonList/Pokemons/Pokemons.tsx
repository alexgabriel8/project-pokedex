// Components
import { Pokemon } from "./Pokemon/Pokemon";

// Types
import { IPokemon } from "../../../../types/pokemon.types";

type Props = {
  pokemons: IPokemon[];
};
const Pokemons = ({ pokemons }: Props) => {
  return (
    <ul>
      {
        pokemons.map((pokemon) => (
          <Pokemon
            pokemon={pokemon}
            key={pokemon.id + ` ${Math.random() * 10}`}
          />
        ))
      }
    </ul>
  );
};

export { Pokemons };
