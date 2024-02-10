import styled from "styled-components";

// Breakpoitns
import { smartTv } from "@constants/breakpoints";

// Types
import { TTheme } from "@typings/themes.types";

type PreviousNextPokemonsContainerProps = {
    theme: TTheme;
    $isPkmListOpen: boolean;
}
const PreviousNextPokemonsContainer = styled.div<PreviousNextPokemonsContainerProps>`
    width: 100%;
    max-width: 1400px;
    margin-bottom: 50px;
    
    padding: 0px 15px;
    @media (min-width: ${smartTv}px) {
        padding: 0 30px;
    }

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1100px) {
        ${({ $isPkmListOpen }) => (
            $isPkmListOpen
                ? "flex-direction: column;"
                : ""
        )}

        .left {
            align-self: flex-start;
        }
        .right {
            align-self: flex-end;
        }
    }

    @media (max-width: 750px) {
        flex-direction: column;
        
        .left {
            align-self: flex-start;
        }
        .right {
            align-self: flex-end;
        }
    }

    background-color: ${({ theme }) => theme.secondary};

    border: 3px solid ${({ theme }) => theme.terciary};
    border-radius: 30px;
`

export { PreviousNextPokemonsContainer }