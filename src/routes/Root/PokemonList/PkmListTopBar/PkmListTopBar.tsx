import { useContext } from "react";

// Components
import * as S from "./PkmListTopBar.styles";

// Context
import { ThemeContext } from "../../../../context/ThemeContext/ThemeContext";

type Props = {
  pokemonsInList: number;
};

const PkmListTopBar = ({ pokemonsInList }: Props) => {
  const { activeTheme } = useContext(ThemeContext)!;

  return (
    <S.PkmListTopBar theme={activeTheme}>
      <S.ListStatus theme={activeTheme}>
        Showing {pokemonsInList}/{pokemonsInList}
      </S.ListStatus>
    </S.PkmListTopBar>
  );
};

export { PkmListTopBar };
