import styled from "styled-components";

// Components
import { XMarkSvg } from "@components/SvgIcons/XMarkSvg";
import { CheckSvg } from "@components/SvgIcons/CheckSvg";

// Breakpoints
import { smartTv } from "@constants/breakpoints";

// Types
import { TTheme } from "@typings/themes.types";

type Props = {
    theme: TTheme;
}

const SettingsOptionConfirmationContainer = styled.div<Props>`
    height: 100%;
    width: 100%;
    
    padding: 0 10px;
    
    color: white;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    position: absolute;
    
    background-color: ${({ theme }) => theme.status.danger};
    
    border: 1px solid ${({ theme }) => theme.terciary};

    &&.hidden {        
        display: none;
    }
`

const Cancel = styled(XMarkSvg)<Props>`
    width: 40px;
    @media (min-width: ${smartTv}px) {
        width: 80px;
    }

    fill: ${({ theme }) => theme.status.danger};

    filter: brightness(50%);

    cursor: pointer;
`

const Confirm = styled(CheckSvg)<Props>`
    width: 40px;
    @media (min-width: ${smartTv}px) {
        width: 80px;
    }

    fill: ${({ theme }) => theme.status.success};

    cursor: pointer;
`

export { SettingsOptionConfirmationContainer, Cancel, Confirm }