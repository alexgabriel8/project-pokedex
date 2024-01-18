// Constants
import { savedPokemonsLocalStorageKey } from "../../../../constants/localStorageAccessKeys";

// Scripts
import { getPokemon } from "../../../../services/getPokemon/getPokemon";
import { getLocalStorageItem } from "../../../../scripts/localStorage";
import { allowInputUse } from "./toggleInputUsage";

// Types
import { TPkmAction } from "../../../../context/PokemonsContext/pokemonsReducer";
import { IPokemon } from "../../../../types/pokemon.types";

async function loadInitialPokemons(dispatch: React.Dispatch<TPkmAction>) {
  try {
    allowInputUse(false);

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
    allowInputUse(true);
  }
}

export { loadInitialPokemons };
