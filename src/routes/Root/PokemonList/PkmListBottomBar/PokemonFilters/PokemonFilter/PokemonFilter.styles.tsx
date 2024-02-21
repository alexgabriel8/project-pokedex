import styled from "styled-components";

// Breakpoints
import { smartTv } from "@constants/breakpoints";

// Components
import { CaretUpSvg } from "@components/SvgIcons/CaretUpSvg";

// Styles
import { noScrollBars } from "@styles/noScrollBars";

// Types
import { TTheme } from "@typings/themes.types";

type Props = {
    theme: TTheme;
}

const PokemonFilterContainer = styled.div<Props>`
    position: relative;

    flex-basis: 125px;
    height: 30px;
    padding: 0 5px;
    @media (min-width: ${smartTv}px) {
        flex-basis: 250px;
        height: 60px;
        padding: 0 10px;
    }

    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.terciary};

    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;

    .selected-type {
        width: 100%;

        text-transform: capitalize;
        text-align: center;

        font-size: 14px;
        @media (min-width: ${smartTv}px) {
            font-size: 28px;
        }
    }

    &.open .filter-options {
        opacity: 1;

        max-height: 180px;
        @media (min-width: ${smartTv}px) {
            max-height: 360px;
        }
    }

    &.open .caret {
        transform: rotate(0);
    }
`;

const PokemonFilterCaret = styled(CaretUpSvg)<Props>`
    flex-shrink: 0;
    
    width: 20px;
    @media(min-width: ${smartTv}px) {
        width: 40px;
    }

    transform: rotate(180deg);

    fill: ${({ theme }) => theme.terciary};

    transition: transform 0.2s;
`;

const PokemonFilterOptions = styled.ul`
    ${noScrollBars};
    
    z-index: 1;
    overflow-x: scroll;
    position: absolute;
    top: 110%;
    left: -1px;
    
    width: 100%;
    max-height: 0px;
    
    text-transform: capitalize;
    
    opacity: 0;

    transition: max-height .2s, opacity .2s;
`;

const PokemonFilterOption = styled.li<Props>`
    background-color: ${({ theme }) => theme.primary};

    text-align: center;

    padding: 5px 0;
    font-size: 16px;
    @media (min-width: ${smartTv}px) {
        padding: 10px 0;
        font-size: 32px;
    }
       
    &.selected {
        cursor: default;
        filter: brightness(50%);
    }
    &:not(.selected):hover {
        background-color: ${({ theme }) => theme.terciary};
        color: ${({ theme }) => theme.primary};
    }

    transition: color .2s, background-color .2s;
`;

export { PokemonFilterContainer, PokemonFilterCaret, PokemonFilterOptions, PokemonFilterOption };
