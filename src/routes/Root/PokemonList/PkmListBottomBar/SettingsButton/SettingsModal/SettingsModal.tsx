import { useContext } from "react";

// Components
import * as S from "./SettingsModal.styles";
import { SettingsOption } from "./SettingsOption/SettingsOption";

// Scripts
import { handleCloseSettings } from "../scripts/handleCloseSettings";

// Contexts
import { ThemeContext } from "../../../../../../context/ThemeContext/ThemeContext";

// JSON
import options from "./settings-options.json"

const SettingsModal = () => {
    const { activeTheme } = useContext(ThemeContext)!;

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
                <S.CloseSettings onClick={handleCloseSettings} theme={activeTheme} />
                <ul>
                    {
                        options.map(({name, type}, i) => (
                            <SettingsOption
                                key={name}
                                index={i}
                                type={type as "toggle" | "confirm"}
                            >
                                {name}
                            </SettingsOption>
                        ))
                    }
                </ul>
            </S.SettingsModalContainer>
        </S.SettingsModalWrapper>
    )
}


export { SettingsModal }