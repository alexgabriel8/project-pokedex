import styled from "styled-components";

// Components
import { MoonSvg } from "../../../../../components/SvgIcons/MoonSvg";
import { SunSvg } from "../../../../../components/SvgIcons/SunSvg";

// Breakpoints
import { smartTv } from "../../../../../constants/breakpoints";

const ThemeTogglerContainer = styled.div`
    position: absolute;

    left: 10px;
    bottom: 20px;

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
`

const ThemeTogglerSun = styled(SunSvg)`
    fill: #FBB500;
`

const ThemeTogglerMoon = styled(MoonSvg)`
    fill: #FFD800;
`


export { ThemeTogglerContainer, ThemeTogglerSun, ThemeTogglerMoon }