import { beforeEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useReducer } from "react";

// Context
import { PokemonsContext } from "./PokemonsContext";

// Constants
import { mockedPkms } from "../../../tests/mockedPkms";

// Reducer
import { pokemonsReducer } from "./pokemonsReducer";

// Types
import {
  AddPkmsAction,
  RemovePkmAction,
  TPkmAction,
} from "./pokemonsReducer.types";

const Dispatcher = ({ dispatch }: { dispatch: TPkmAction }) => {
  const [pokemons, dispatchPokemons] = useReducer(pokemonsReducer, []);

  return (
    <PokemonsContext.Provider value={{ pokemons, dispatchPokemons }}>
      <ul>
        {pokemons.map((pokemon, i) => (
          <li key={i}>{pokemon.name}</li>
        ))}
      </ul>
      <button onClick={() => dispatchPokemons(dispatch)}>Dispatch</button>
    </PokemonsContext.Provider>
  );
};

it("Should throw error if action has no type", async () => {
  const user = userEvent.setup();

  const invalidDispatch = null;

  render(<Dispatcher dispatch={invalidDispatch as unknown as TPkmAction} />);

  const dispatchBtn = screen.getByText("Dispatch");
  await expect(async () => {
    await user.click(dispatchBtn);
  }).rejects.toThrow("Invalid action");
});

it("Should throw error if action has invalid type name", async () => {
  const user = userEvent.setup();

  const invalidDispatch = {
    type: "INVALID_TYPE",
  };

  render(<Dispatcher dispatch={invalidDispatch as unknown as TPkmAction} />);

  const dispatchBtn = screen.getByText("Dispatch");
  await expect(async () => {
    await user.click(dispatchBtn);
  }).rejects.toThrow("Unknown action: INVALID_TYPE");
});

describe("Actions", () => {
  beforeEach(() => cleanup());

  describe("ADD_PKM", () => {
    it("Should add Pokémon to State", async () => {
      const user = userEvent.setup();

      const validDispatch: TPkmAction = {
        type: "ADD_PKM",
        pokemon: mockedPkms.structured[0],
      };

      render(<Dispatcher dispatch={validDispatch as unknown as TPkmAction} />);

      const dispatchBtn = screen.getByText("Dispatch");
      await user.click(dispatchBtn);

      screen.getByText(mockedPkms.structured[0].name);
    });

    it("Should throw error if Pokémon isn't passed", async () => {
      const user = userEvent.setup();

      const invalidDispatch = {
        type: "ADD_PKM",
      };

      render(
        <Dispatcher dispatch={invalidDispatch as unknown as TPkmAction} />,
      );

      const dispatchBtn = screen.getByText("Dispatch");
      await expect(async () => {
        await user.click(dispatchBtn);
      }).rejects.toThrow("Dispatched ADD_PKM action without providing pokemon");
    });
  });

  describe("ADD_PKMS", () => {
    it("Should add Pokémons to State", async () => {
      const user = userEvent.setup();

      const validDispatch = {
        type: "ADD_PKMS",
        pokemons: mockedPkms.structured,
      };

      render(<Dispatcher dispatch={validDispatch as unknown as TPkmAction} />);

      const dispatchBtn = screen.getByText("Dispatch");
      await user.click(dispatchBtn);

      screen.getByText(mockedPkms.structured[0].name);
      screen.getByText(mockedPkms.structured[1].name);
    });

    it("Should throw error if Pokémons are not passed", async () => {
      const user = userEvent.setup();

      const invalidDispatch = {
        type: "ADD_PKMS",
      };

      render(
        <Dispatcher dispatch={invalidDispatch as unknown as TPkmAction} />,
      );

      const dispatchBtn = screen.getByText("Dispatch");
      await expect(async () => {
        await user.click(dispatchBtn);
      }).rejects.toThrow(
        "Dispatched ADD_PKMS action without providing pokemons",
      );
    });
  });

  describe("REMOVE_PKM", () => {
    it("Should remove Pokémon from state", async () => {
      const user = userEvent.setup();

      const addPkmsDispatch: AddPkmsAction = {
        type: "ADD_PKMS",
        pokemons: mockedPkms.structured,
      };

      const validDispatch: RemovePkmAction = {
        type: "REMOVE_PKM",
        pkmIndex: 0,
      };

      const { rerender } = render(<Dispatcher dispatch={addPkmsDispatch} />);

      const dispatchBtn = screen.getByText("Dispatch");

      await user.click(dispatchBtn);

      screen.getByText(mockedPkms.structured[0].name);
      screen.getByText(mockedPkms.structured[1].name);

      rerender(<Dispatcher dispatch={validDispatch} />);

      await user.click(dispatchBtn);

      expect(screen.queryByText(mockedPkms.structured[0].name)).toBeNull();
      screen.getByText(mockedPkms.structured[1].name);
    });

    it("Should throw error if ID is not provided", async () => {
      const user = userEvent.setup();

      const invalidDispatch = {
        type: "REMOVE_PKM",
      };

      render(
        <Dispatcher dispatch={invalidDispatch as unknown as TPkmAction} />,
      );

      const dispatchBtn = screen.getByText("Dispatch");
      await expect(async () => {
        await user.click(dispatchBtn);
      }).rejects.toThrow("Dispatched REMOVE_PKM without providing ID");
    });
  });

  describe("CLEAR_LIST", () => {
    it("Should clear State", async () => {
      const user = userEvent.setup();

      const validDispatch = {
        type: "CLEAR_LIST",
      };

      const addPkmsDispatch = {
        type: "ADD_PKMS",
        pokemons: [...mockedPkms.structured],
      };

      const { rerender } = render(
        <Dispatcher dispatch={addPkmsDispatch as unknown as TPkmAction} />,
      );

      const dispatchBtn = screen.getByText("Dispatch");
      await user.click(dispatchBtn);

      screen.getByText(mockedPkms.structured[0].name);
      screen.getByText(mockedPkms.structured[1].name);

      rerender(
        <Dispatcher dispatch={validDispatch as unknown as TPkmAction} />,
      );

      await user.click(dispatchBtn);

      expect(screen.queryByText(mockedPkms.structured[0].name)).toBeNull();
    });
  });
});
