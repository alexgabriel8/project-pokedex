import { useContext } from "react";

// Components
import * as S from "./SettingsButton.styles";

// Scripts
import { handleOpenSettings } from "./scripts/handleOpenSettings";

// Contexts
import { ThemeContext } from "../../../../../context/ThemeContext/ThemeContext";

const SettingsButton = () => {
    const { activeTheme } = useContext(ThemeContext)!;

    return (
        <S.SettingsButtonContainer
            id="settings-button"
            onClick={handleOpenSettings}
            theme={activeTheme}
        >
            <S.GearIcon theme={activeTheme} />
        </S.SettingsButtonContainer>
    )
}

export { SettingsButton }