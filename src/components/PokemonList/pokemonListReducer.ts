import { IPokemon } from "../../types/pokemon.types";

type AddPkmAction = {
  type: "ADD_PKM";
  pokemon: IPokemon;
};
type AddPkmsAction = {
  type: "ADD_PKMS";
  pokemons: IPokemon[];
};

type TAction = AddPkmAction | AddPkmsAction;

function pokemonListReducer(pokemons: Array<object>, action: TAction) {
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

    default:
      throw new Error(`Unknown action: ${action["type"]}`);
  }
}

export { pokemonListReducer };
