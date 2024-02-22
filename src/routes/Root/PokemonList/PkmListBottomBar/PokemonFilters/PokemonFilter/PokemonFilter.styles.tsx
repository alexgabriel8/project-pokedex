import styled from "styled-components";

// Components
import { Select, SelectCaret, SelectOption, SelectOptions } from "@components/Select";

// Types
import { TTheme } from "@typings/themes.types";

type Props = {
    theme: TTheme;
}

const pkmFilterMobileBreakpoint = 400;

const PokemonFilterContainer = styled(Select)<Props>`
    @media (max-width: 400px) {
        width: 100px;
    }

    .selected-option {
        @media (max-width: ${pkmFilterMobileBreakpoint}px) {
            font-size: 12px;
        }
    }
`;

const PokemonFilterCaret = styled(SelectCaret)<Props>`
    @media (max-width: ${pkmFilterMobileBreakpoint}px) {
        width: 15px;
    }
`;

const PokemonFilterOptions = styled(SelectOptions)``;

const PokemonFilterOption = styled(SelectOption)<Props>`
    @media (max-width: ${pkmFilterMobileBreakpoint}px) {
        font-size: 14px;
    }
`;

export { PokemonFilterContainer, PokemonFilterCaret, PokemonFilterOptions, PokemonFilterOption };
