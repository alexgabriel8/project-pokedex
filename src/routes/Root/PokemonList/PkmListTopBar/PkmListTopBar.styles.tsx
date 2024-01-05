import styled from "styled-components";

// Breakpoints
import { smartTv } from "../../../../constants/breakpoints";

const PkmListTopBar = styled.div`
  width: 100%;
  height: 50px;
  @media (min-width: ${smartTv}px) {
    height: 100px;
  }

  z-index: 1;

  position: sticky;
  top: 0;

  background-color: ${({ theme }) => theme.primary + "90"};

  backdrop-filter: blur(1px);
`;

const ListStatus = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: ${({ theme }) => (theme.name === "light" ? "black" : "white")};

  font-size: clamp(0.6rem, 0.6rem + 0.4vw, 3rem);
`;

export { PkmListTopBar, ListStatus };
