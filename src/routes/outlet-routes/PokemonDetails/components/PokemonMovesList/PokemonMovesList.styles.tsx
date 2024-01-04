import styled from "styled-components";

// Styles
import { noScrollBars } from "../../../../../styles/noScrollBars";

// Types
import { TTheme } from "../../../../../constants/themes/themes.types";

// Breakpoints
import { smartTv } from "../../../../../constants/breakpoints";

type PokemonMovesListContainerProps = {
    theme: TTheme;
}
const PokemonMovesListContainer = styled.section<PokemonMovesListContainerProps>`
    --top-shadow: inset 0 100px 40px -10px #000000A0;
    --bottom-shadow: inset 0 -60px 40px -10px #000000A0;
    @media (min-width: ${smartTv}px) {
    --top-shadow: inset 0 200px 80px -20px #000000A0;
    --bottom-shadow: inset 0 -120px 80px -20px #000000A0;
    }

    ${noScrollBars}

    margin-top: 10px;

    position: relative;
    overflow-y: scroll;

    background-color: ${({ theme }) => theme.secondary};

    width: 100%;
    max-width: 330px;
    min-height: 600px;
    @media (min-width: ${smartTv}px) {
        max-width: 660px;
        min-height: 1200px;
    }

    &&.shadow-at-top {
        box-shadow: var(--top-shadow);
    }
    &&.shadow-at-bottom {
        box-shadow: var(--bottom-shadow);
    }
    &&.shadow-at-top.shadow-at-bottom {
        box-shadow: var(--bottom-shadow), var(--top-shadow);
    }
`

export { PokemonMovesListContainer }
