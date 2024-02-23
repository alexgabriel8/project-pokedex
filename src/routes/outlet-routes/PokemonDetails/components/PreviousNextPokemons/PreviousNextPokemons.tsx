import { useContext } from "react";

// Components
import * as S from "./PreviousNextPokemons.styles";
import { PreviousNextPokemon } from "./PreviousNextPokemon/PreviousNextPokemon";

// Hooks
import { useIsPokemonListOpen } from "./useIsPokemonListOpen";

// Context
import { ThemeContext } from "@context/ThemeContext/ThemeContext";

const PreviousNextPokemons = ({ currentPkmId }: { currentPkmId: number }) => {
  const { activeTheme } = useContext(ThemeContext)!;

  const isPkmListOpen = useIsPokemonListOpen();

  return (
    <S.PreviousNextPokemonsContainer
      $isPkmListOpen={isPkmListOpen}
      theme={activeTheme}
    >
      <PreviousNextPokemon pkmId={currentPkmId - 1} position="left" />
      <PreviousNextPokemon pkmId={currentPkmId + 1} position="right" />
    </S.PreviousNextPokemonsContainer>
  );
};

export { PreviousNextPokemons };
