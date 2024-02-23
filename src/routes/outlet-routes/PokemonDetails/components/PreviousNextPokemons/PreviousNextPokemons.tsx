import { useContext } from "react";

// Components
import * as S from "./PreviousNextPokemons.styles";
import { PreviousNextPokemon } from "./PreviousNextPokemon/PreviousNextPokemon";

// Context
import { ThemeContext } from "@context/ThemeContext/ThemeContext";
import { PkmListStatusContext } from "@context/PokemonListContext/PkmListStatusContext";

const PreviousNextPokemons = ({ currentPkmId }: { currentPkmId: number }) => {
  const { activeTheme } = useContext(ThemeContext)!;
  const { pkmListStatus } = useContext(PkmListStatusContext);

  return (
    <S.PreviousNextPokemonsContainer
      $isPkmListOpen={pkmListStatus.isOpen}
      theme={activeTheme}
    >
      <PreviousNextPokemon pkmId={currentPkmId - 1} position="left" />
      <PreviousNextPokemon pkmId={currentPkmId + 1} position="right" />
    </S.PreviousNextPokemonsContainer>
  );
};

export { PreviousNextPokemons };
