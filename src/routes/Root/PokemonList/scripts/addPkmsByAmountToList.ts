// Scripts
import { getPokemon } from "@services/getPokemon/getPokemon";
import { allowPkmListInteraction } from "./allowPkmListInteraction";

// Types
import { TPkmAction } from "@context/PokemonsContext/pokemonsReducer.types";

async function addPkmsByAmountToList(
  dispatch: React.Dispatch<TPkmAction>,
  amount: number,
) {
  try {
    allowPkmListInteraction(false);

    for (let i = 0; i < amount; i++) {
      const fetchedPokemon = await getPokemon();
      dispatch({
        type: "ADD_PKM",
        pokemon: fetchedPokemon,
      });
    }
  } catch (err) {
    console.log(err);
  } finally {
    allowPkmListInteraction(true);
  }
}

export { addPkmsByAmountToList };
