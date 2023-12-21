import { getPokemon } from "../../../../services/getPokemon/getPokemon";
import { allowInputUse } from "./toggleInputUsage";

async function addPkmsByAmountToList(
  dispatch: React.Dispatch<any>,
  amount: number,
) {
  try {
    allowInputUse(false);

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
    allowInputUse(true);
  }
}

export { addPkmsByAmountToList };
