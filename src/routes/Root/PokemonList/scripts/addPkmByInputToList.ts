// Scripts
import { slugifyString } from "@scripts/slugifyString";
import { getPokemon } from "@services/getPokemon/getPokemon";
import { allowPkmListInteraction } from "./allowPkmListInteraction";

// Types
import { TPkmAction } from "@context/PokemonsContext/pokemonsReducer.types";

async function addPkmByInputToList(
  dispatch: React.Dispatch<TPkmAction>,
  input: string,
) {
  if (input === "") return;

  const addPkmInput = document.querySelector(
    "#add-pkm-by-input input",
  ) as HTMLInputElement;
  
  try {
    allowPkmListInteraction(false);

    const fetchedPokemon = await getPokemon(slugifyString(input));
    dispatch({
      type: "ADD_PKM",
      pokemon: fetchedPokemon,
    });

    addPkmInput.value = "";
  } catch (err) {
    console.error(err);
  } finally {
    allowPkmListInteraction(true);
    addPkmInput.focus();
  }
}

export { addPkmByInputToList };
