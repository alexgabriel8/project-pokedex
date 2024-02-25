import styled from "styled-components";

import { smartTv } from "@constants/breakpoints";

const BottomBarWrapper = styled.div`
  overflow: hidden;
  position: sticky;
  bottom: 0;

  z-index: 1;
`;

const PkmListBottomBar = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 300px;
  padding: 10px;
  gap: 10px;
  @media (min-width: ${smartTv}px) {
    height: 600px;
    padding: 20px;
    gap: 20px;
  }
  background-color: ${(props) => props.theme.primary + "90"};

  &&:not(.hidden) {
    backdrop-filter: blur(1px);
  }
  &&.hidden {
    pointer-events: none;
    opacity: 0;

    margin-top: -300px;
    @media (min-width: ${smartTv}px) {
      margin-top: -600px;
    }
  }

  transition:
    margin-top 0.5s,
    opacity 0.5s;
`;

const PkmAddersWrapper = styled.div`
  display: flex;
  gap: 15px;

  @media (min-width: ${smartTv}px) {
    gap: 30px;
    justify-content: center;
  }
`;

export { PkmListBottomBar, BottomBarWrapper, PkmAddersWrapper };
