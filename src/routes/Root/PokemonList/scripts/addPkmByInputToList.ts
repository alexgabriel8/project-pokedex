// Scripts
import { slugifyString } from "../../../../scripts/slugifyString";
import { getPokemon } from "../../../../services/getPokemon/getPokemon";
import { allowPkmListInteraction } from "./allowPkmListInteraction";

// Types
import { TPkmAction } from "../../../../context/PokemonsContext/pokemonsReducer.types";

async function addPkmByInputToList(
  dispatch: React.Dispatch<TPkmAction>,
  input: string,
) {
  if (input === "") return;

  try {
    allowPkmListInteraction(false);

    input = slugifyString(input);

    const fetchedPokemon = await getPokemon(input);
    dispatch({
      type: "ADD_PKM",
      pokemon: fetchedPokemon,
    });

    const addPkmInput = document.querySelector("#input-add-pkm-by-input") as HTMLInputElement
    addPkmInput.value = "";
  } catch (err) {
    console.error(err);
  } finally {
    allowPkmListInteraction(true);
  }
}

export { addPkmByInputToList };
