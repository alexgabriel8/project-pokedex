import { useContext } from "react";

// Components
import * as S from "./PokemonStat.styles";

// Context
import { ThemeContext } from "@context/ThemeContext/ThemeContext";

const PokemonStat = ({ stat, value }: { stat: string; value: number }) => {
  const { activeTheme } = useContext(ThemeContext)!;

  return (
    <li>
      <S.StatName>{stat}</S.StatName>
      <S.HorizontalLine className="horizontal-line" $theme={activeTheme} />
      {value}
    </li>
  );
};

export { PokemonStat };
