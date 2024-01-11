import { useContext } from "react";

// Components
import * as S from "./SettingsOption.styles";
import { SettingsOptionConfirmation } from "./SettingsOptionConfirmation/SettingsOptionConfirmation";

// Scripts
import { handleToggleOptionclick } from "./scripts/handleToggleOptionClick";
import { handleConfirmOptionClick } from "./scripts/handleConfirmOptionClick";

// Context
import { ThemeContext } from "../../../../../../../context/ThemeContext/ThemeContext";

type Props = {
    children: string;
    type: "toggle" | "confirm";
    index: number;
}
const SettingsOption = ({children, type, index}: Props) => {
    const { activeTheme } = useContext(ThemeContext)!;

    const selector = `setting-option-${index + 1}`

    return (
        <S.SettingsOptionContainer
            id={selector}
            theme={activeTheme}
            onClick={
                type === "toggle"
                    ? handleToggleOptionclick
                    : handleConfirmOptionClick
            }
        >
            <p>{children}</p>
            {
                type === "toggle" &&
                    <S.SettingsOptionTogglerIcon
                        className="toggler-icon"
                        theme={activeTheme}
                    />
            }
            {
                type === "confirm" &&
                    <SettingsOptionConfirmation selector={selector} />
            }
        </S.SettingsOptionContainer>        
    )
}

export { SettingsOption }