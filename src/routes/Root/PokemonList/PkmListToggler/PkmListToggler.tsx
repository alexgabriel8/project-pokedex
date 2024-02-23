import { useContext } from "react";

// Components
import * as S from "./PkmListToggler.styles";

// Context
import { ThemeContext } from "@context/ThemeContext/ThemeContext";

const PkmListToggler = () => {
  const { activeTheme } = useContext(ThemeContext)!;

  const handleClick = () => {
    document.querySelector(".pokemon-list")?.classList.toggle("hidden");
  };

  return (
    <S.PkmListToggler
      id="pokemon-list-toggler"
      theme={activeTheme}
      onClick={handleClick}
    />
  );
};

export { PkmListToggler };
