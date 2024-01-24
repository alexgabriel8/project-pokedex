import { it, expect } from "vitest";

// Mocks
import { fetchPokeAPIMock } from "../../../tests/mocks/fetchPokeAPIMock";

// Scripts
import { getPokemon } from "./getPokemon";

// Constants
import { mockedPkms } from "../../../tests/mockedPkms"

it("Should fetch Pokémon", async () => {
    fetchPokeAPIMock.getPokemon.withPokemon();

    const pokemon = await getPokemon();
    expect(pokemon).toStrictEqual(mockedPkms.structured[0])
})

it("Should throw error on not found Pokémon", async () => {
    fetchPokeAPIMock.getPokemon.noPokemon();

    const invalidInput = "Picachucks";

    await expect(async () => await getPokemon(invalidInput))
        .rejects.toThrow(`Could not find Pokémon with input "${invalidInput}"`)
})