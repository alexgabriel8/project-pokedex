import styled from "styled-components";

// Components
import { MoonSvg } from "@components/SvgIcons/MoonSvg";
import { SunSvg } from "@components/SvgIcons/SunSvg";

// Breakpoints
import { smartTv } from "@constants/breakpoints";

const ThemeTogglerContainer = styled.div`
  position: absolute;

  left: 20px;
  bottom: 20px;
  @media (min-width: ${smartTv}px) {
    left: 40px;
    bottom: 40px;
  }

  svg {
    position: relative;

    width: 20px;
    height: 20px;
    @media (min-width: ${smartTv}px) {
      width: 40px;
      height: 40px;
    }

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ThemeTogglerSun = styled(SunSvg)`
  fill: #fbb500;
`;

const ThemeTogglerMoon = styled(MoonSvg)`
  fill: #ffd800;
`;

export { ThemeTogglerContainer, ThemeTogglerSun, ThemeTogglerMoon };
