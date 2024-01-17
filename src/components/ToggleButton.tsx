import styled from "styled-components";

// Breakpoints
import { smartTv } from "../constants/breakpoints";

// Types
import { TTheme } from "../constants/themes/themes.types";

type Props = {
    theme: TTheme;
}
const ToggleButton = styled.div<Props>`
    position: relative;

    width: 50px;
    height: 20px;
    @media (min-width: ${smartTv}px) {
        width: 100px;
        height: 40px;
    }

    border-radius: 20px;

    border: 1px solid ${({ theme }) => theme.modalTogglerButton.circleBorder};

    background-color: ${({ theme }) => theme.modalTogglerButton.backgroundDisabled};
    &&.active {
        background-color: ${({ theme }) => theme.modalTogglerButton.backgroundEnabled};
    }

    cursor: pointer;

    .toggler-circle {
        transform: translate(-5px, -4px);
    }
    &&.active .toggler-circle {
        transform: translate(100%, -4px);
        @media (min-width: ${smartTv}px) {
            transform: translate(100%, -8px);
        }
    }

    transition: background-color 0.25s;
`

const ToggleButtonCircle = styled.span<Props>`
    position: absolute;

    width: 25px;
    height: 25px;
    @media (min-width: ${smartTv}px) {
        && {
            width: 50px;
            height: 50px;
            transform: translate(-10px, -8px);
        }
    }

    border: 1px solid ${({ theme }) => theme.modalTogglerButton.circleBorder};

    background-color: ${({ theme }) => theme.modalTogglerButton.circleBackground};

    border-radius: 50%;

    transition: transform 0.2s;
`

export { ToggleButton, ToggleButtonCircle }