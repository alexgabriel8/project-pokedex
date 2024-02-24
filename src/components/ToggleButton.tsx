import styled from "styled-components";

// Breakpoints
import { smartTv } from "@constants/breakpoints";

// Types
import { TTheme } from "@typings/themes.types";

type Props = {
  theme: TTheme;
};

const ToggleButton = styled.div<Props>`
  position: relative;

  width: 50px;
  height: 20px;
  @media (min-width: ${smartTv}px) {
    width: 100px;
    height: 40px;
  }

  flex-shrink: 0;
  
  border-radius: 20px;

  border: 1px solid ${({ theme }) => theme.modalTogglerButton.circleBorder};

  background-color: ${({ theme }) =>
    theme.modalTogglerButton.backgroundDisabled};
  &&.active {
    background-color: ${({ theme }) =>
      theme.modalTogglerButton.backgroundEnabled};
  }

  cursor: pointer;

  .toggler-circle {
    transform: translate(-40%, -6px);
  }
  &&.active .toggler-circle {
    transform: translate(100%, -6px);
    @media (min-width: ${smartTv}px) {
      transform: translate(100%, -12px);
    }
  }

  transition: background-color 0.25s;
`;

const ToggleButtonCircle = styled.span<Props>`
  position: absolute;

  width: 30px;
  height: 30px;
  @media (min-width: ${smartTv}px) {
    && {
      width: 60px;
      height: 60px;
      transform: translate(-40%, -12px);
    }
  }

  border: 1px solid ${({ theme }) => theme.modalTogglerButton.circleBorder};

  background-color: ${({ theme }) => theme.modalTogglerButton.circleBackground};

  border-radius: 50%;

  transition: transform 0.2s;
`;

export { ToggleButton, ToggleButtonCircle };
