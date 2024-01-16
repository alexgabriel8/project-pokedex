import { useContext } from "react";

// Components
import * as S from "./SettingsModal.styles";
import { SettingsOptions } from "./components/SettingsOptions/SettingsOptions";

// Scripts
import { handleCloseSettings } from "../scripts/handleCloseSettings";

// Hooks
import { useSaveSettingsToLocalStorage } from "./hooks/useSaveSettingsToLocalStorage";

// Contexts
import { ThemeContext } from "../../../../../../context/ThemeContext/ThemeContext";

const SettingsModal = () => {
    const { activeTheme } = useContext(ThemeContext)!;

    useSaveSettingsToLocalStorage();

    return (
        <S.SettingsModalWrapper
            className="hidden"
            id="settings-modal"
            onClick={handleCloseSettings}
        >
            <S.SettingsModalContainer
                onClick={(e) => e.stopPropagation()}
                theme={activeTheme}
            >
                <S.CloseSettings
                    onClick={handleCloseSettings}
                    theme={activeTheme}
                />
                <SettingsOptions />
            </S.SettingsModalContainer>
        </S.SettingsModalWrapper>
    )
}


export { SettingsModal }