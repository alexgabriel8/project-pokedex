import { useReducer, useContext, useEffect, useRef } from "react";

// Components
import * as S from "./PokemonList.styles";

import { PkmListTopBar } from "./PkmListTopBar/PkmListTopBar";
import { Pokemons } from "./Pokemons/Pokemons";
import { PkmListBottomBar } from "./PkmListBottomBar/PkmListBottomBar";

// Context
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";

// Scripts
import { loadInitialPokemons } from "./scripts/loadInitialPokemons";
import { addPkmsByAmountToList } from "./scripts/addPkmsByAmountToList";
import { addPkmByInputToList } from "./scripts/addPkmByInputToList";

// Reducer
import { pokemonListReducer } from "./pokemonListReducer";
import { saveOnLocalStorage } from "../../scripts/localStorage";
import { savedPokemonsLocalStorageKey } from "../../constants/localStorageAccessKeys";

// Types
import { IPokemon } from "../../types/pokemon.types";

const PokemonList = () => {
  const [pokemons, dispatchPokemons] = useReducer(pokemonListReducer, []);

  const loadInitialPokemonsCalled = useRef(false);
  useEffect(() => {
    if (loadInitialPokemonsCalled.current === true) return;
    loadInitialPokemonsCalled.current = true;

    loadInitialPokemons(dispatchPokemons);
  }, []);

  useEffect(() => {
    if (pokemons.length < 10) return;

    saveOnLocalStorage(savedPokemonsLocalStorageKey, pokemons);
  }, [pokemons]);

  const { activeTheme } = useContext(ThemeContext)!;

  return (
    <S.PokemonList className="pokemon-list hidden" theme={activeTheme}>
      <PkmListTopBar pokemonsInList={pokemons.length} />
      <Pokemons pokemons={pokemons as unknown as IPokemon[]} />{" "}
      {/* Remove bad typing */}
      <PkmListBottomBar
        addPkmByInputToList={(input) =>
          addPkmByInputToList(dispatchPokemons, input)
        }
        addPkmsByAmountToList={(amount) =>
          addPkmsByAmountToList(dispatchPokemons, amount)
        }
      />
    </S.PokemonList>
  );
};

export { PokemonList };
