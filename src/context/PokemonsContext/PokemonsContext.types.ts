import { IPokemon } from "../../types/pokemon.types";
import { TPkmAction } from "./pokemonsReducer";

type TPokemonsContext = {
  pokemons: IPokemon[];
  dispatchPokemons: React.Dispatch<TPkmAction>;
};

export type { TPokemonsContext };
