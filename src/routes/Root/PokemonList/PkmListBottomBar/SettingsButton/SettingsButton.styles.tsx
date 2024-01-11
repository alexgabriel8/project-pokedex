import styled from "styled-components";

// Components
import { GearSvg } from "../../../../../components/SvgIcons/GearSvg";

// Breakpoints
import { smartTv } from "../../../../../constants/breakpoints";

// Types
import { TTheme } from "../../../../../constants/themes/themes.types";

type SettingsButtonCotainerProps = {
    theme: TTheme;
}
const SettingsButtonContainer = styled.button<SettingsButtonCotainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 10px;
    right: 10px;

    width: 40px;
    height: 40px;
    @media (min-width: ${smartTv}px) {
        width: 80px;
        height: 80px;

        bottom: 20px;
        right: 20px;
    }

    background-color: ${({ theme }) => theme.primary};
    
    border-radius: 50%;

    &&.clicked svg,
    &&:hover svg {
        transform: rotate(180deg);
    }
`

type GearIconProps = {
    theme: TTheme;
}
const GearIcon = styled(GearSvg)<GearIconProps>`
    width: 25px;
    @media (min-width: ${smartTv}px) {
        width: 50px;
    }
    
    fill: ${({ theme }) => theme.terciary};

    transition: transform 1s;
`

export { SettingsButtonContainer, GearIcon }