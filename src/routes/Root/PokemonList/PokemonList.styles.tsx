import styled from "styled-components";

// Breakpoints
import { smartTv } from "../../../constants/breakpoints";

// Styles
import { noScrollBars } from "../../../styles/noScrollBars";

// Types
import { TTheme } from "../../../constants/themes/themes.types";

type PokemonListProps = {
  theme: TTheme;
}

const PokemonList = styled.div<PokemonListProps>`
  ${noScrollBars};

  overflow-y: scroll;

  background-color: ${({ theme }) => theme.terciary};

  flex-shrink: 0;
  flex-basis: 350px;
  &&.hidden {
    flex-basis: 0px;
  }
  @media screen and (max-width: 400px) {
    max-width: 87vw;
  }
  @media screen and (min-width: ${smartTv}px) {
    flex-basis: 700px;
  }

  transition: flex-basis 0.5s;
`;

export { PokemonList };
