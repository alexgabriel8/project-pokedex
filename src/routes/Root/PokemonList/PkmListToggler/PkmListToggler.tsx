import { useContext } from "react";

// Components
import * as S from "./PkmListToggler.styles";

// Context
import { ThemeContext } from "@context/ThemeContext/ThemeContext";
import { PkmListStatusContext } from "@context/PokemonListContext/PkmListStatusContext";

const PkmListToggler = () => {
  const { setPkmListStatus } = useContext(PkmListStatusContext);
  const { activeTheme } = useContext(ThemeContext)!;

  const handleClick = () => {
    document.querySelector(".pokemon-list")?.classList.toggle("hidden");
    setPkmListStatus((prevStatus) => ({
      ...prevStatus,
      isOpen: !prevStatus.isOpen
    }));
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
