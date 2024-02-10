import styled from "styled-components";

// Breakpoints
import { smartTv } from "@constants/breakpoints";

// Types
import { TTheme } from "@typings/themes.types";

type Props = {
  theme: TTheme;
}

const SocialIconsContainer = styled.div<Props>`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 10px 0;

  .social-icon {
    border-radius: 50%;

    &:hover {
      background-color: ${(props) => props.theme.terciary};
    }

    transition: background-color 0.3s;
  }

  .social-icon svg {
    display: block; // Remove extra spacing generated to <a> wrapping it

    width: 45px;
    height: 45px;
    padding: 5px;
    @media (min-width: ${smartTv}px) {
      width: 90px;
      height: 90px;
      padding: 10px;
    }

    fill: ${(props) => props.theme.terciary};
    &:hover {
      fill: ${(props) => props.theme.primary};
    }

    transition: fill 0.3s;
  }
`;

export { SocialIconsContainer };
