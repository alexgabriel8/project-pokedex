import { beforeEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useReducer } from "react";

// Context
import { PokemonsContext } from "./PokemonsContext";

// Constants
import mockPkms from "../../../tests/mockPkms.json";

// Reducer
import { pokemonsReducer } from "./pokemonsReducer";

// Types
import { TPkmAction } from "./pokemonsReducer";

const Dispatcher = ({dispatch}: {dispatch: TPkmAction}) => {
    const [ pokemons, dispatchPokemons ] = useReducer(pokemonsReducer, [])

    return(
        <PokemonsContext.Provider value={{ pokemons, dispatchPokemons}}>
            <ul>
                {
                    pokemons.map((pokemon, i) => (
                        <li key={i}>{pokemon.name}</li>
                    ))
                }
            </ul>
            <button onClick={() => dispatchPokemons(dispatch)}>Dispatch</button>
        </PokemonsContext.Provider>
    )
}

it("Should throw error if action has no type", async () => {
    const user = userEvent.setup();

    const invalidDispatch = null;

    render(
        <Dispatcher dispatch={invalidDispatch as unknown as TPkmAction} />
    )

    const dispatchBtn = screen.getByText("Dispatch");
    await expect(async () => {
        await user.click(dispatchBtn);
    }).rejects.toThrow("Invalid action")
})

it("Should throw error if action has invalid type name", async () => {
    const user = userEvent.setup();

    const invalidDispatch = {
        type: "INVALID_TYPE"
    };

    render(
        <Dispatcher dispatch={invalidDispatch as unknown as TPkmAction} />
    )

    const dispatchBtn = screen.getByText("Dispatch");
    await expect(async () => {
        await user.click(dispatchBtn);
    }).rejects.toThrow("Unknown action: INVALID_TYPE")
})

describe("Actions", () => {
    beforeEach(() => cleanup())

    describe("ADD_PKM", () => {
        it("Should add Pokémon to State", async () => {
            const user = userEvent.setup();

            const validDispatch = {
                type: "ADD_PKM",
                pokemon: mockPkms[0]
            }

            render(
                <Dispatcher dispatch={validDispatch as unknown as TPkmAction} />
            )

            const dispatchBtn = screen.getByText("Dispatch")
            await user.click(dispatchBtn)

            screen.getByText(mockPkms[0].name)
        })

        it("Should throw error if Pokémon isn't passed", async () => {
            const user = userEvent.setup();

            const invalidDispatch = {
                type: "ADD_PKM"
            }

            render(
                <Dispatcher dispatch={invalidDispatch as unknown as TPkmAction}/>
            )
            
            const dispatchBtn = screen.getByText("Dispatch");
            await expect(async () => {
                await user.click(dispatchBtn)
            }).rejects.toThrow("Dispatched ADD_PKM action without providing pokemon")
            
        })
    })

    describe("ADD_PKMS", () => {
        it("Should add Pokémons to State", async () => {
            const user = userEvent.setup();

            const validDispatch = {
                type: "ADD_PKMS",
                pokemons: mockPkms
            }

            render(
                <Dispatcher dispatch={validDispatch as unknown as TPkmAction} />
            )
            
            const dispatchBtn = screen.getByText("Dispatch");
            await user.click(dispatchBtn);
            
            screen.getByText(mockPkms[0].name)
            screen.getByText(mockPkms[1].name)
        })

        it("Should throw error if Pokémons are not passed", async () => {
            const user = userEvent.setup();

            const invalidDispatch = {
                type: "ADD_PKMS"
            }

            render(
                <Dispatcher dispatch={invalidDispatch as unknown as TPkmAction} />
            )

            const dispatchBtn = screen.getByText("Dispatch");
            await expect(async () => {
                await user.click(dispatchBtn);
            }).rejects.toThrow("Dispatched ADD_PKMS action without providing pokemons")
        })
    })

    describe("CLEAR_LIST", () => {
        it("Should clear State", async () => {
            const user = userEvent.setup();

            const validDispatch = {
                type: "CLEAR_LIST"
            }

            const addPkmsDispatch = {
                type: "ADD_PKMS",
                pokemons: mockPkms
            }

            const { rerender } = render(
                <Dispatcher dispatch={addPkmsDispatch as unknown as TPkmAction} />
            )

            const dispatchBtn = screen.getByText("Dispatch");
            await user.click(dispatchBtn);

            screen.getByText(mockPkms[0].name);
            screen.getByText(mockPkms[1].name);

            rerender(
                <Dispatcher dispatch={validDispatch as unknown as TPkmAction} />
            )

            await user.click(dispatchBtn);
            
            expect(screen.queryByText(mockPkms[0].name)).toBeNull()
        })
    })
})
