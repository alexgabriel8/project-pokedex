import styled from "styled-components";

import { smartTv } from "@constants/breakpoints";

const BottomBarWrapper = styled.div`
  overflow: hidden;
  position: sticky;
  bottom: 0;

  z-index: 1;

  input {
    transition: filter 0.5s;
  }

  input[disabled] {
    filter: brightness(50%);
  }
`;

const PkmListBottomBar = styled.div`
  width: 100%;
  height: 300px;
  padding: 10px;
  @media (min-width: ${smartTv}px) {
    height: 450px;
    padding: 20px;
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
      margin-top: -450px;
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
