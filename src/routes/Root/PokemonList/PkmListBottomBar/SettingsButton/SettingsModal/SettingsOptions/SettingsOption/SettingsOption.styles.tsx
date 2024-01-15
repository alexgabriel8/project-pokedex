import styled from "styled-components";

// Components
import { ToggleButton } from "../../../../../../../../components/ToggleButton";

// Breakpoints
import { smartTv } from "../../../../../../../../constants/breakpoints";

// Types
import { TTheme } from "../../../../../../../../constants/themes/themes.types";

const SettingsOptionContainer = styled.li`
    position: relative;

    height: 50px;
    
    margin: 10px 0;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    
    color: ${({ theme }) => theme.name === "light" ? "#000" : "#FFF"};
    
    p {
        font-size: 1.5rem;
    }

    @media (min-width: ${smartTv}px) {
        height: 100px;

        gap: 40px;

        p {
            font-size: 2.5rem;
        }
    }

    &&:has(.confirm-setting-apply.hidden),
    &&:has(.toggler-icon) {
        cursor: pointer;
    }
`

type TogglerIconProps = {
    theme: TTheme;
}
const SettingsOptionTogglerIcon = styled(ToggleButton)<TogglerIconProps>`
    flex-shrink: 0;

    background-color: ${({ theme }) => theme.modalTogglerButton.backgroundDisabled};
    &&.active {
        background-color: ${({ theme }) => theme.modalTogglerButton.backgroundEnabled};
    }

    border: 1px solid ${({ theme }) => theme.modalTogglerButton.circleBorder};

    &&::before {
        background-color: ${({ theme }) => theme.modalTogglerButton.circleBackground};

        border: 1px solid ${({ theme }) => theme.modalTogglerButton.circleBorder};
    }
`

export { SettingsOptionContainer, SettingsOptionTogglerIcon };
