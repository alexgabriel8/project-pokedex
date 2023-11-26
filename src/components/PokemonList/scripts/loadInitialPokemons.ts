import { savedPokemonsLocalStorageKey } from "../../../constants/localStorageAccessKeys";
import { getLocalStorageItem } from "../../../scripts/localStorage";
import { getPokemon } from "../../../services/getPokemon/getPokemon";
import { allowInputUse } from "./toggleInputUsage";

async function loadInitialPokemons(dispatch: React.Dispatch<any>) {
  try {
    allowInputUse(false);

    let initialPokemons = getLocalStorageItem(savedPokemonsLocalStorageKey);
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
    allowInputUse(true);
  }
}

export { loadInitialPokemons };
