import { useContext } from "react";
import * as S from "./PkmListToggler.styles";

import { ThemeContext } from "../../../context/ThemeContext/ThemeContext";

const PkmListToggler = () => {
  const { activeTheme } = useContext(ThemeContext)!;

  const handleClick = () => {
    document.querySelector(".pokemon-list")?.classList.toggle("hidden");
  };

  return <S.PkmListToggler theme={activeTheme} onClick={handleClick} />;
};

export { PkmListToggler };
