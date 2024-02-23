import { ThemeContext } from "@context/ThemeContext/ThemeContext";
import { useContext } from "react";

// Components
import * as S from "./PokemonFilterIcon.styles";

import { PkmListStatusContext } from "@context/PokemonListContext/PkmListStatusContext";

const PokemonFilterIcon = () => {
  const { activeTheme } = useContext(ThemeContext)!;
  const { pkmListStatus, setPkmListStatus } = useContext(PkmListStatusContext)!;

  const isFiltered = pkmListStatus.filter.type1 || pkmListStatus.filter.type2;

  const handleClick = () => {
    setPkmListStatus((prevStatus) => ({
      ...prevStatus,
      filter: {
        type1: null,
        type2: null,
      },
    }));
  };

  return (
    <S.PokemonFilterIconWrapper
      id="filter-icon"
      className={isFiltered ? "filtered" : ""}
      onClick={isFiltered ? handleClick : undefined}
    >
      <S.PokemonFilterIconContainer theme={activeTheme} />
      {isFiltered && <S.PokemonFilterIconCloser theme={activeTheme} />}
    </S.PokemonFilterIconWrapper>
  );
};

export { PokemonFilterIcon };
