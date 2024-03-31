import styled from "styled-components";

// Components
import { XMarkSvg } from "@components/SvgIcons/XMarkSvg";

// Breakpoints
import { smartTv } from "@constants/breakpoints";

// Types
import { TTheme } from "@typings/themes.types";

type Props = {
  theme: TTheme;
};
const RemovePokemonContainer = styled(XMarkSvg)<Props>`
  --drop-shadow: drop-shadow(0 0 1px #000);

  position: absolute;
  top: 5px;
  right: 5px;

  fill: ${({ theme }) => theme.status.danger};

  filter: var(--drop-shadow);

  width: 25px;
  height: 25px;
  @media (min-width: ${smartTv}px) {
    top: 10px;
    right: 10px;
    width: 50px;
    height: 50px;
  }

  &:hover {
    cursor: pointer;
    filter: var(--drop-shadow) brightness(150%);
    scale: 1.5;
  }

  transition: scale 0.2s linear;
`;

export { RemovePokemonContainer };
