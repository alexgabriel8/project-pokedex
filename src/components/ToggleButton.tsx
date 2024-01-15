import styled from "styled-components";

import { smartTv } from "../constants/breakpoints";

const ToggleButton = styled.div`
    position: relative;

    width: 50px;
    height: 20px;
    @media (min-width: ${smartTv}px) {
        width: 100px;
        height: 40px;
    }

    border-radius: 20px;

    &&::before {
        display: block;
        content: "";
        
        position: absolute;
        transform: translate(-5px, -4px);
        
        width: 25px;
        height: 25px;
        @media (min-width: ${smartTv}px) {
            width: 50px;
            height: 50px;
            transform: translate(-10px, -8px);
        }

        border-radius: 50%;

        transition: transform 0.2s;
    }

    &&.active::before {
        transform: translate(100%, -4px);
        @media (min-width: ${smartTv}px) {
            transform: translate(100%, -8px);
        }
    }

    cursor: pointer;

    transition: background-color 0.25s;
`

export { ToggleButton }