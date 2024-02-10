import styled from "styled-components";

// Components
import { ArrowUpSvg } from "@components/SvgIcons/ArrowUpSvg";

// Breakpoints
import { smartTv } from "@constants/breakpoints";

// Types
import { TTheme } from "@typings/themes.types";

type Props = {
    theme: TTheme;
}

const PreviousNextPokemonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;

    a {
        display: inline-block;
    }

    &&.left {
        .arrow-icon {
            transform: rotate(-90deg);
        }
    }

    &&.right {
        a {
            order: 2;
        }

        .arrow-icon {
            transform: rotate(90deg);
        }

        .pokemon-sprite {
            order: 1;
            transform: rotateY(180deg);
        }
    }

    .pokemon-sprite {
        width: 96px;
        height: 96px;
        @media (min-width: ${smartTv}px) {
            width: 192px;
            height: 192px;
        }
    }

    .pokemon-name {
        text-transform: capitalize;
    }

    a,
    .arrow-icon {
        pointer-events: none;
    }
    
    .arrow-icon {
        width: 50px;
        @media (min-width: ${smartTv}px) {
            width: 75px;
        }
        
        opacity: 0.4;
    }

    &&.has-pokemon .arrow-icon {
        cursor: pointer;
        opacity: 1;
        pointer-events: all;
        &:hover {
            scale: 1.2;
            filter: brightness(150%);
        }

        transition: 
            scale 0.1s,
            filter 0.1s;
    }
`

const ArrowIcon = styled(ArrowUpSvg)<Props>`
    fill: ${({ theme }) => theme.terciary}
`

export { PreviousNextPokemonContainer, ArrowIcon }
