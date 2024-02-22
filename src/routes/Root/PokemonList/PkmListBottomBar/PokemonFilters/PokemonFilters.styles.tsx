import styled from "styled-components";

// Breakpoints
import { smartTv } from "@constants/breakpoints";

const PokemonFiltersContainer = styled.section`
  display: flex;
  justify-content: center;

  gap: 15px;
  @media (min-width: ${smartTv}px) {
    gap: 30px;
  }
`;

export { PokemonFiltersContainer };
