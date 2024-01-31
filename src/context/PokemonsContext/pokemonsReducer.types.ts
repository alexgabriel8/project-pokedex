import { IPokemon } from "../../types/pokemon.types";

type AddPkmAction = {
    type: "ADD_PKM";
    pokemon: IPokemon;
};
type AddPkmsAction = {
    type: "ADD_PKMS";
    pokemons: IPokemon[];
};
type RemovePkmAction = {
    type: "REMOVE_PKM";
    id: number;
}
type ClearListAction = {
    type: "CLEAR_LIST"
};

type TPkmAction = AddPkmAction | AddPkmsAction | RemovePkmAction | ClearListAction;

export type { AddPkmAction, AddPkmsAction, RemovePkmAction, ClearListAction, TPkmAction }