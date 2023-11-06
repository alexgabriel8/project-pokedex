import { useContext } from "react";

// Styled components
import * as S from "./PkmListTopBar.styles";

// Context
import { ThemeContext } from "../../../context/ThemeContext/ThemeContext";

const PkmListTopBar = () => {
  const { activeTheme } = useContext(ThemeContext)!;

  return (
    <S.PkmListTopBar theme={activeTheme}>
      <S.ListStatus theme={activeTheme}>Showing 000/000</S.ListStatus>
    </S.PkmListTopBar>
  );
};

export { PkmListTopBar };
