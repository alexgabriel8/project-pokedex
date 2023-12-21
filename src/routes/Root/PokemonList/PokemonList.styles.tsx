import styled from "styled-components";

// Breakpoints
import { smartTv } from "../../../constants/breakpoints";

// Styles
import { noScrollBars } from "../../../styles/noScrollBars";

const PokemonList = styled.div`
  ${noScrollBars};

  overflow-y: scroll;

  background-color: ${(props) => props.theme.terciary};

  flex-shrink: 0;
  flex-basis: 350px;
  &&.hidden {
    flex-basis: 0px;
  }
  @media screen and (max-width: 360px) {
    flex-shrink: 0.2;
  }
  @media screen and (min-width: ${smartTv}px) {
    flex-basis: 700px;
  }

  transition: flex-basis 0.5s;
`;

export { PokemonList };
