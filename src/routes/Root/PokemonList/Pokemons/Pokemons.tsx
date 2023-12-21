// Components
import { IPokemon } from "../../../../types/pokemon.types";

// Types
import { Pokemon } from "./Pokemon/Pokemon";

type Props = {
  pokemons: IPokemon[];
};
const Pokemons = ({ pokemons }: Props) => {
  return (
    <ul>
      {pokemons.map((pokemon) => (
        <Pokemon
          pokemon={pokemon}
          key={pokemon.id + ` ${Math.random() * 10}`}
        />
      ))}
    </ul>
  );
};

export { Pokemons };
