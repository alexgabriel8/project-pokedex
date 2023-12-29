import styled from "styled-components";
import { smartTv } from "../../../../../constants/breakpoints";

const PkmAbilitiesWrapper = styled.section`
    margin: 10px 0%;
    width: 100%;

    .title {
        margin-bottom: 10px;

        @media (min-width: ${smartTv}px) {
            font-size: 3rem;
        }
    }
`

const PkmAbilities = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    gap: 10px;
    @media (min-width: ${smartTv}px) {
        gap: 20px;
    }
`

export { PkmAbilitiesWrapper, PkmAbilities }