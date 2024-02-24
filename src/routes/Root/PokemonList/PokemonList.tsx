import { useContext } from "react";

// Components
import * as S from "./PokemonList.styles";
import { PkmListTopBar } from "./PkmListTopBar/PkmListTopBar";
import { Pokemons } from "./Pokemons/Pokemons";
import { PkmListBottomBar } from "./PkmListBottomBar/PkmListBottomBar";

// Contexts
import { ThemeContext } from "../../../context/ThemeContext/ThemeContext";
import { PokemonsContext } from "../../../context/PokemonsContext/PokemonsContext";
import { PkmListStatusContext } from "@context/PokemonListContext/PkmListStatusContext";

// Scripts
import { addPkmsByAmountToList } from "./scripts/addPkmsByAmountToList";
import { addPkmByInputToList } from "./scripts/addPkmByInputToList";

// Hooks
import { useSaveListToLocalStorage } from "./hooks/useSaveListToLocalStorage";

const PokemonList = () => {
  const { activeTheme } = useContext(ThemeContext)!;
  const { dispatchPokemons } = useContext(PokemonsContext)!;
  const { pkmListStatus } = useContext(PkmListStatusContext);

  useSaveListToLocalStorage();

  return (
    <S.PokemonList
      className={`pokemon-list ${pkmListStatus.isOpen ? "" : "hidden"}`}
      theme={activeTheme}
    >
      <PkmListTopBar />
      <Pokemons />
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
