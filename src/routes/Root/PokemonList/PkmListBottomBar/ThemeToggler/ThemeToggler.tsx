import { useContext } from "react";

// Components
import * as S from "./ThemeToggler.styles";
import { ToggleButton, ToggleButtonCircle } from "@components/ToggleButton";

// Context
import { ThemeContext } from "@context/ThemeContext/ThemeContext";

// Constants
import { themes } from "@constants/themes";

const ThemeToggler = () => {
  const { activeTheme, setActiveTheme } = useContext(ThemeContext)!;

  const isLight = activeTheme.name === "light";

  const toggleTheme = () => setActiveTheme(isLight ? themes.dark : themes.light);

  return (
    <S.ThemeTogglerContainer>
      <ToggleButton
        theme={activeTheme}
        onClick={toggleTheme}
        className={`
            theme-toggler 
            ${isLight ? "" : "toggled"}
        `}
      >
        <ToggleButtonCircle className="toggler-circle" theme={activeTheme}>
          {
            isLight
              ? <S.ThemeTogglerSun theme={activeTheme} />
              : <S.ThemeTogglerMoon theme={activeTheme} />
          }
        </ToggleButtonCircle>
      </ToggleButton>
    </S.ThemeTogglerContainer>
  );
};

export { ThemeToggler };
