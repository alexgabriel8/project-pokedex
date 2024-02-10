import styled from "styled-components";

// Breakpoints
import { smartTv } from "@constants/breakpoints";

// Types
import { TTheme } from "@typings/themes.types";

type Props = {
    theme: TTheme;
}

const MoveContainer = styled.li<Props>`
    text-transform: capitalize;

    color: white;

    width: 100%;
    
    min-height: 50px;
    @media (min-width: ${smartTv}px) {
        min-height: 100px;
    }

    padding: 10px;
    @media (min-width: ${smartTv}px) {
        padding: 20px;
    }
    
    &&:hover {
        background-color: ${({ theme }) => `${theme.secondaryDarker}A0`};
    }
    
    &&.clicked {
        background-color: ${({ theme }) => theme.secondaryDarker};
    }
    &&:not(.clicked) {
        cursor: pointer;
    }

    .move-name {
        font-weight: 400;
        margin-bottom: 5px;

        font-size: 1.5rem;
        @media (min-width: ${smartTv}px) {
            margin-bottom: 10px;
            font-size: 2rem;
        }
    }
    &&.clicked .move-name {
        font-weight: bold;
        text-shadow:
          1px 1px 0 #000,
          -1px 1px 0 #000,
          -1px -1px 0 #000,
          1px -1px 0 #000;
    }

    .move-description {
        word-break: break-word;
        text-align: justify;
        display: none;
        font-size: 1.25rem;
        @media (min-width: ${smartTv}px) {
            font-size: 1.75rem;
        }
    }
    &&.clicked .move-description {
        display: block;
    }

    transition:
        background-color 0.1s,
        height 0.2s;
`

export { MoveContainer }