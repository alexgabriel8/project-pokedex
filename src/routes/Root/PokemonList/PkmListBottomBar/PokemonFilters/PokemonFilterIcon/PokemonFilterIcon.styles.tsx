import styled from "styled-components";

// Breakpoints
import { smartTv } from "@constants/breakpoints";

// Components
import { FilterSvg } from "@components/SvgIcons/FilterSvg";
import { XMarkSvg } from "@components/SvgIcons/XMarkSvg";

// Types
import { TTheme } from "@typings/themes.types";

type Props = {
    theme: TTheme;
}

const PokemonFilterIconWrapper = styled.div`
    position: relative;

    height: 30px;
    width: 30px;
    @media (min-width: ${smartTv}px) {
        height: 60px;
        width: 60px;
    }
    
    &.filtered {
        cursor: pointer;
    }
    &:not(.filtered) {
        opacity: .5;
    }
`;

const PokemonFilterIconContainer = styled(FilterSvg)<Props>`
    fill: ${({ theme }) => theme.terciary};
`;

const PokemonFilterIconCloser = styled(XMarkSvg)<Props>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    fill: white;
    background-color: ${({ theme }) => theme.status.danger};

    border-radius: 50%;

    flex-shrink: 0;

    height: 15px;
    width: 15px;
    @media (min-width: ${smartTv}px) {
        height: 30px;
        width: 30px;
    }
`;

export { PokemonFilterIconWrapper, PokemonFilterIconContainer, PokemonFilterIconCloser };
