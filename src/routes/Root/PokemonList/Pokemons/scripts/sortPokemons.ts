import { IPokemon } from "@typings/pokemon.types";

function sortAscending(a: IPokemon, b: IPokemon, by: "name" | "id") {
    if(a[`${by}`] > b[`${by}`]) return 1;
    else return -1;
}

function sortDescending(a: IPokemon, b: IPokemon, by: "name" | "id") {
    if(a[`${by}`] < b[`${by}`]) return 1;
    else return -1;
}

function sortPokemons(pokemons: IPokemon[], by: "name" | "id", order: "asc" | "desc") {
    return order === "asc"
        ? pokemons.sort((a, b) => sortAscending(a, b, by))
        : pokemons.sort((a, b) => sortDescending(a, b, by));
};

export { sortPokemons };
