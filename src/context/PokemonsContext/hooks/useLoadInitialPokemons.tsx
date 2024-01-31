import { useEffect, useRef } from "react";

// Hooks
import { loadInitialPokemons } from "../../../routes/Root/PokemonList/scripts/loadInitialPokemons";

// Types
import { TPkmAction } from "../pokemonsReducer.types";

const useLoadInitialPokemons = (dispatchPokemons: React.Dispatch<TPkmAction>) => {
    const loadInitialPokemonsCalled = useRef(false);

    useEffect(() => {
      if (loadInitialPokemonsCalled.current === true) return;
      loadInitialPokemonsCalled.current = true;
  
      void loadInitialPokemons(dispatchPokemons);
    }, []);
}

export { useLoadInitialPokemons }