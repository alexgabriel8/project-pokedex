import { useContext } from "react";

// Components
import * as S from "./PkmListTopBar.styles";

// Context
import { ThemeContext } from "@context/ThemeContext/ThemeContext";
import { PkmListStatusContext } from "@context/PokemonListContext/PkmListStatusContext";

const PkmListTopBar = () => {
  const { activeTheme } = useContext(ThemeContext)!;
  const { pkmListStatus } = useContext(PkmListStatusContext);

  return (
    <S.PkmListTopBar theme={activeTheme}>
      <S.ListStatus theme={activeTheme}>
        Showing {pkmListStatus.visiblePokemons}/{pkmListStatus.totalPokemons}
      </S.ListStatus>
    </S.PkmListTopBar>
  );
};

export { PkmListTopBar };
