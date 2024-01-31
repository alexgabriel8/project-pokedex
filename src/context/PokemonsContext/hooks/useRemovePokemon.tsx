import { useContext } from "react"

import { PokemonsContext } from "../PokemonsContext"

const useRemovePokemon = (pkmIndex: number) => {
    const { dispatchPokemons } = useContext(PokemonsContext)!;

    const removePokemon = () => {
        dispatchPokemons({
            type: "REMOVE_PKM",
            pkmIndex
        });
    }

    return removePokemon;
}

export { useRemovePokemon };
