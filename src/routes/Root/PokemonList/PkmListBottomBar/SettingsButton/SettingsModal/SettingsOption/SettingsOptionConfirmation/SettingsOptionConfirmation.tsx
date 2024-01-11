import { useContext } from "react";

// Components
import * as S from "./SettingsOptionConfirmation.styles";

// Scripts
import { handleConfirmSettingApply } from "./handleConfirmSettingApply";

// Context
import { ThemeContext } from "../../../../../../../../context/ThemeContext/ThemeContext";

type SvgClickEvent = React.UIEvent<SVGAElement>;

const SettingsOptionConfirmation = ({selector}: {selector: string}) => {
    const { activeTheme } = useContext(ThemeContext)!;

    return(
        <S.SettingsOptionConfirmationContainer className="confirm-setting-apply hidden" theme={activeTheme}>
           <S.Cancel
            onClick={(e: SvgClickEvent) => handleConfirmSettingApply(e, false, selector)}
            theme={activeTheme}
           /> 

           <p>Are you sure?</p>

           <S.Confirm
            onClick={(e: SvgClickEvent) => handleConfirmSettingApply(e, true, selector)}
            theme={activeTheme}
           />
        </S.SettingsOptionConfirmationContainer>
    )
}

export { SettingsOptionConfirmation }
