// Constants
import { savedPokemonsLocalStorageKey } from "../../../../constants/localStorageAccessKeys";

// Scripts
import { getPokemon } from "../../../../services/getPokemon/getPokemon";
import { getLocalStorageItem } from "../../../../scripts/localStorage";

// Types
import { TPkmAction } from "../../../../context/PokemonsContext/pokemonsReducer.types";
import { IPokemon } from "../../../../types/pokemon.types";
import { allowPkmListInteraction } from "./allowPkmListInteraction";

async function loadInitialPokemons(dispatch: React.Dispatch<TPkmAction>) {
  try {
    allowPkmListInteraction(false);

    const initialPokemons = getLocalStorageItem(savedPokemonsLocalStorageKey) as unknown as IPokemon[];
    if (!initialPokemons) {
      for (let i = 0; i < 10; i++) {
        const fetchedPokemon = await getPokemon();

        dispatch({
          type: "ADD_PKM",
          pokemon: fetchedPokemon,
        });
      }
    } else dispatch({
        type: "ADD_PKMS",
        pokemons: initialPokemons,
      });
  } catch (error) {
    console.error(error);
  } finally {
    allowPkmListInteraction(true);
  }
}

export { loadInitialPokemons };
