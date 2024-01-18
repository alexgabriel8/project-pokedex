import { useContext } from "react";

// Components
import * as S from "./ThemeToggler.styles";
import { ToggleButton, ToggleButtonCircle } from "../../../../../components/ToggleButton";

// Context
import { ThemeContext } from "../../../../../context/ThemeContext/ThemeContext";

// Constants
import { themes } from "../../../../../constants/themes/themes";

const ThemeToggler = () => {
    const { activeTheme, setActiveTheme } = useContext(ThemeContext)!;

    const isLightTheme = activeTheme.name === "light";

    const toggleTheme = () => {
        isLightTheme
            ? setActiveTheme(themes.dark)
            : setActiveTheme(themes.light)
    }

    return(
        <S.ThemeTogglerContainer>
            <ToggleButton
                theme={activeTheme}
                onClick={toggleTheme}
                className={`
                    theme-toggler 
                    ${
                        isLightTheme
                            ? ""
                            : "active"
                    }
                `}
            >
                <ToggleButtonCircle className="toggler-circle" theme={activeTheme}>
                    {
                        isLightTheme
                            ? <S.ThemeTogglerSun theme={activeTheme} />
                            : <S.ThemeTogglerMoon theme={activeTheme} />
                    }
                </ToggleButtonCircle>
            </ToggleButton>
        </S.ThemeTogglerContainer>
    )
}

export { ThemeToggler }
