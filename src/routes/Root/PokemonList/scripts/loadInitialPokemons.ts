// Constants
import { savedPokemonsLocalStorageKey } from "@constants/localStorageAccessKeys";

// Scripts
import { getPokemon } from "@services/getPokemon/getPokemon";
import { getLocalStorageItem } from "@scripts/localStorage";
import { allowPkmListInteraction } from "./allowPkmListInteraction";

// Types
import { TPkmAction } from "@context/PokemonsContext/pokemonsReducer.types";
import { IPokemon } from "@typings/pokemon.types";

async function loadInitialPokemons(dispatch: React.Dispatch<TPkmAction>) {
  try {
    allowPkmListInteraction(false);

    const initialPokemons = getLocalStorageItem(
      savedPokemonsLocalStorageKey,
    ) as unknown as IPokemon[];
    if (!initialPokemons) {
      for (let i = 0; i < 10; i++) {
        const fetchedPokemon = await getPokemon();

        dispatch({
          type: "ADD_PKM",
          pokemon: fetchedPokemon,
        });
      }
    } else
      dispatch({
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
