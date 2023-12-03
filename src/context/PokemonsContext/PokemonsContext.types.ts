import { TPkmAction } from "./pokemonsReducer";

type TPokemonsContext = {
  pokemons: object[];
  dispatchPokemons: React.Dispatch<TPkmAction>;
};

export type { TPokemonsContext };
