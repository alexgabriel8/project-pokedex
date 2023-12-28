import { createContext, useReducer, useRef, useEffect } from "react";

// Reducer
import { pokemonsReducer } from "./pokemonsReducer";

// Scripts
import { saveOnLocalStorage } from "../../scripts/localStorage";
import { loadInitialPokemons } from "../../routes/Root/PokemonList/scripts/loadInitialPokemons";

// Types
import { TPokemonsContext } from "./PokemonsContext.types";

// Constants
import { savedPokemonsLocalStorageKey } from "../../constants/localStorageAccessKeys";

const PokemonsContext = createContext<TPokemonsContext>(
  [] as unknown as TPokemonsContext,
);

const PokemonsProvider = ({ children }: React.PropsWithChildren) => {
  const [pokemons, dispatchPokemons] = useReducer(pokemonsReducer, []);

  const loadInitialPokemonsCalled = useRef(false);
  useEffect(() => {
    if (loadInitialPokemonsCalled.current === true) return;
    loadInitialPokemonsCalled.current = true;

    loadInitialPokemons(dispatchPokemons);
  }, []);

  useEffect(() => {
    if (pokemons.length < 10) return;

    saveOnLocalStorage(savedPokemonsLocalStorageKey, pokemons);
  }, [pokemons]);

  return (
    <PokemonsContext.Provider value={{ pokemons, dispatchPokemons }}>
      {children}
    </PokemonsContext.Provider>
  );
};

export { PokemonsContext, PokemonsProvider };
