import { useContext } from "react";

// Context
import { ThemeContext } from "../../../context/ThemeContext/ThemeContext";

// Styled Components
import * as S from "./PkmListBottomBar.styles";

// Components
import { BottomBarToggler } from "./BottomBarToggler/BottomBarToggler";

const PkmListBottomBar = () => {
  const { activeTheme } = useContext(ThemeContext)!;

  return (
    <S.BottomBarWrapper>
      <BottomBarToggler />
      <S.PkmListBottomBar theme={activeTheme} className="list-bottom-bar">
        <button>Search by name/id</button>
        <br />
        <button>Search randomly X Pokémons</button>
      </S.PkmListBottomBar>
    </S.BottomBarWrapper>
  );
};

export { PkmListBottomBar };
