import styled from "styled-components";

// Breakpoints
import { smartTv } from "../../../../../../../constants/breakpoints";

// Types
import { TTheme } from "../../../../../../../constants/themes/themes.types";

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
const SettingsOptionTogglerIcon = styled.div<TogglerIconProps>`
    position: relative;

    flex-shrink: 0;

    width: 50px;
    height: 20px;
    @media (min-width: ${smartTv}px) {
        width: 100px;
        height: 40px;
    }

    background-color: ${({ theme }) => theme.modalTogglerButton.backgroundDisabled};
    &&.active {
        background-color: ${({ theme }) => theme.modalTogglerButton.backgroundEnabled};
    }
    
    border: 1px solid ${({ theme }) => theme.modalTogglerButton.circleBorder};
    border-radius: 20px;

    &&::before {
        display: block;
        content: "";
        
        position: absolute;
        transform: translate(-5px, -4px);
        
        width: 25px;
        height: 25px;
        @media (min-width: ${smartTv}px) {
            width: 50px;
            height: 50px;
            transform: translate(-10px, -8px);
        }

        background-color: ${({ theme }) => theme.modalTogglerButton.circleBackground};

        border: 1px solid ${({ theme }) => theme.modalTogglerButton.circleBorder};
        border-radius: 50%;

        transition: transform 0.2s;
    }

    &&.active::before {
        transform: translate(100%, -4px);
        @media (min-width: ${smartTv}px) {
            transform: translate(100%, -8px);
        }
    }

    transition: background-color 0.25s;
`

export { SettingsOptionContainer, SettingsOptionTogglerIcon };
