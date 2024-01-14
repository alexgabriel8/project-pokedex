import { useContext } from "react";

// Components
import * as S from "./SettingsOption.styles";
import { SettingsOptionConfirmation } from "./SettingsOptionConfirmation/SettingsOptionConfirmation";

// Scripts
import { handleToggleOptionclick } from "./scripts/handleToggleOptionClick";
import { handleConfirmOptionClick } from "./scripts/handleConfirmOptionClick";

// Context
import { ThemeContext } from "../../../../../../../../context/ThemeContext/ThemeContext";

// Types
import { SettingsOptionProps } from "./SettingsOption.types";

const SettingsOption = (props: SettingsOptionProps) => {
    const { activeTheme } = useContext(ThemeContext)!;

    const selector = `setting-option-${props.index + 1}`;

    return (
        <S.SettingsOptionContainer
            id={selector}
            theme={activeTheme}
            onClick={
                props.type === "toggle"
                    ? (e) => handleToggleOptionclick(e, props.updateSetting)
                    : handleConfirmOptionClick
            }
        >
            <p>{props.children}</p>
            {
                props.type === "toggle" &&
                    <S.SettingsOptionTogglerIcon
                        className={`toggler-icon ${props.settingValue === true ? "active" : ""}`}
                        theme={activeTheme}
                    />
            }
            {
                props.type === "confirm" &&
                    <SettingsOptionConfirmation selector={selector} />
            }
        </S.SettingsOptionContainer>        
    )
}

export { SettingsOption }