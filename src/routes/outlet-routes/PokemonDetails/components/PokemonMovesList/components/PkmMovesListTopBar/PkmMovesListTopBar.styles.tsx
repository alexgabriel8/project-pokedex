import styled from "styled-components";

import { smartTv } from "@constants/breakpoints";

const PkmMovesListTopBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: sticky;
  top: 0;

  width: 100%;
  height: 50px;
  @media (min-width: ${smartTv}px) {
    height: 100px;
  }

  color: white;
  background-color: ${({ theme }) => `${theme.primary}90`};

  backdrop-filter: blur(1px);

  text-shadow:
    1px 1px 0 #000,
    -1px 1px 0 #000,
    -1px -1px 0 #000,
    1px -1px 0 #000;

  h2 {
    font-size: 1.5rem;
    @media (min-width: ${smartTv}px) {
      font-size: 2.5rem;
    }
  }
`;

export { PkmMovesListTopBarContainer };
