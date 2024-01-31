import { IPokemon } from "../../types/pokemon.types";
import { TPkmAction } from "./pokemonsReducer.types";

function pokemonsReducer(pokemons: IPokemon[], action: TPkmAction) {
  if(!action?.type) throw new Error(`Invalid action`)

  switch (action.type) {
    case "ADD_PKM": {
      if (!action.pokemon)
        throw new Error("Dispatched ADD_PKM action without providing pokemon");
      return [...pokemons, action.pokemon];
    }

    case "ADD_PKMS": {
      if (!action.pokemons)
        throw new Error(
          "Dispatched ADD_PKMS action without providing pokemons",
        );
      return [...pokemons, ...action.pokemons];
    }
    
    case "REMOVE_PKM": {
      if(!action.id) throw new Error("Dispatched REMOVE_PKM without providing ID")
      return pokemons.filter(pkm => pkm.id !== action.id)
    }

    case "CLEAR_LIST": {
      return []
    }

    default: throw new Error(`Unknown action: ${String(action["type"])}`);
  }
}

export { pokemonsReducer };
export type { TPkmAction };
