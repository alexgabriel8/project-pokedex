import { useContext } from "react";

// Components
import * as S from "./BottomBarToggler.styles";

// Context
import { ThemeContext } from "../../../../../context/ThemeContext/ThemeContext";

const BottomBarToggler = () => {
  const { activeTheme } = useContext(ThemeContext)!;

  const handleClick = () => {
    document.querySelector(".list-bottom-bar")?.classList.toggle("hidden");
  };

  return <S.BottomBarToggler theme={activeTheme} onClick={handleClick} />;
};

export { BottomBarToggler };
