import { IPokemon, TypesAccepted } from "@typings/pokemon.types";

function filterPokemons(pokemons: IPokemon[], type1: TypesAccepted, type2: TypesAccepted | null) {
    if(type2) return pokemons.filter(pokemon => {
        if(pokemon.types.secondary) {
            if(
                [type1, type2].includes(pokemon.types.primary) &&
                [type1, type2].includes(pokemon.types.secondary)
            ) return pokemon;
        }
    });
    
    else return pokemons.filter(pokemon => {
        if(pokemon.types.primary === type1) {
            return pokemon;
        }
    });
};

export { filterPokemons };
