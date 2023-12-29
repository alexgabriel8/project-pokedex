import { slugifyString } from "../../../../scripts/slugifyString";
import { getPokemon } from "../../../../services/getPokemon/getPokemon";
import { allowInputUse } from "./toggleInputUsage";

async function addPkmByInputToList(
  dispatch: React.Dispatch<any>,
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

    (document.querySelector(
      "#input-add-pkm-by-input",
    ) as HTMLInputElement)!.value = "";
  } catch (err) {
    console.error(err);
  } finally {
    allowInputUse(true);
  }
}

export { addPkmByInputToList };
