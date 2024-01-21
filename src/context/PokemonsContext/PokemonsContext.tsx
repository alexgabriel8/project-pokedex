import { createContext, useReducer } from "react";

// Reducer
import { pokemonsReducer } from "./pokemonsReducer";

// Hooks
import { useLoadInitialPokemons } from "./useLoadInitialPokemons";

// Types
import { TPokemonsContext } from "./PokemonsContext.types";

const PokemonsContext = createContext<TPokemonsContext>(
  [] as unknown as TPokemonsContext,
);

const PokemonsProvider = ({ children }: React.PropsWithChildren) => {
  const [pokemons, dispatchPokemons] = useReducer(pokemonsReducer, []);

  useLoadInitialPokemons(dispatchPokemons);

  return (
    <PokemonsContext.Provider value={{ pokemons, dispatchPokemons }}>
      {children}
    </PokemonsContext.Provider>
  );
};

export { PokemonsContext, PokemonsProvider };
