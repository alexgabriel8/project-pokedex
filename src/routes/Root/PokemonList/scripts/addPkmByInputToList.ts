// Scripts
import { slugifyString } from "../../../../scripts/slugifyString";
import { getPokemon } from "../../../../services/getPokemon/getPokemon";
import { allowInputUse } from "./toggleInputUsage";

// Types
import { TPkmAction } from "../../../../context/PokemonsContext/pokemonsReducer";

async function addPkmByInputToList(
  dispatch: React.Dispatch<TPkmAction>,
  input: string,
) {
  if (input === "") return;

  try {
    allowInputUse(false);

    input = input.trim();
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
    allowInputUse(true);
  }
}

export { addPkmByInputToList };
