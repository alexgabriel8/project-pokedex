import { useContext } from "react";

// Components
import * as S from "./PokemonList.styles";
import { PkmListTopBar } from "./PkmListTopBar/PkmListTopBar";
import { Pokemons } from "./Pokemons/Pokemons";
import { PkmListBottomBar } from "./PkmListBottomBar/PkmListBottomBar";

// Contexts
import { ThemeContext } from "../../../context/ThemeContext/ThemeContext";
import { PokemonsContext } from "../../../context/PokemonsContext/PokemonsContext";

// Scripts
import { addPkmsByAmountToList } from "./scripts/addPkmsByAmountToList";
import { addPkmByInputToList } from "./scripts/addPkmByInputToList";

// Hooks
import { useSaveListToLocalStorage } from "./hooks/useSaveListToLocalStorage";

const PokemonList = () => {
  const { pokemons, dispatchPokemons } = useContext(PokemonsContext)!;
  const { activeTheme } = useContext(ThemeContext)!;

  useSaveListToLocalStorage();

  return (
    <S.PokemonList className="pokemon-list" theme={activeTheme}>
      <PkmListTopBar pokemonsInList={pokemons.length} />
      <Pokemons pokemons={pokemons} />
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
