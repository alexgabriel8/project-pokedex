import styled from "styled-components";

// Components
import { XMarkSvg } from "../../../../../../components/SvgIcons/XMarkSvg";

// Breakpoints
import { smartTv } from "../../../../../../constants/breakpoints";

// Types
import { TTheme } from "../../../../../../constants/themes/themes.types";

type Props = {
    theme: TTheme;
}

const SettingsModalWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #292929A0;
`

const SettingsModalContainer = styled.div<Props>`
    padding: 10px;
    margin: 10px;

    height: 100%;

    width: 500px;
    max-height: 600px;
    @media (min-width: ${smartTv}px) {
        width: 1000px;
        max-height: 1200px;
    }

    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    gap: 10px;

    background-color: ${({ theme }) => theme.primary};
    border: 5px solid ${({ theme }) => theme.terciary};
`

const CloseSettings = styled(XMarkSvg)<Props>`
    width: 75px;
    height: 75px;
    @media (min-width: ${smartTv}px) {
        width: 150px;
        height: 150px;
    }

    align-self: flex-end;

    fill: ${({ theme }) => theme.status.danger};

    cursor: pointer;
`

export { SettingsModalWrapper, SettingsModalContainer, CloseSettings }
