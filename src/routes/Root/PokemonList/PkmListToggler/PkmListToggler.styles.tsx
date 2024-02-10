import styled from "styled-components";

import { smartTv } from "@constants/breakpoints";

const PkmListToggler = styled.button`
  position: sticky;
  z-index: 1;
  flex-shrink: 0;
  margin: auto -25px auto 0; // -25px for toggler to stay on top of the outlet route

  width: 25px;
  height: 50px;
  border-radius: 0 25px 25px 0;
  @media (min-width: ${smartTv}px) {
    height: 100px;
    width: 50px;
    margin-right: -50px;
    border-radius: 0 50px 50px 0;
  }

  background-color: ${({ theme }) => theme.terciary + "A0"};
`;

export { PkmListToggler };
