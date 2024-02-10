import styled from "styled-components";

// Breakpoints
import { smartTv } from "@constants/breakpoints";

const SettingsOptionContainer = styled.li`
    position: relative;

    height: 50px;
    
    margin: 10px 0;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    
    color: ${({ theme }) => theme.name === "light" ? "#000" : "#FFF"};
    
    p {
        font-size: 1.5rem;
    }

    @media (min-width: ${smartTv}px) {
        height: 100px;

        gap: 40px;

        p {
            font-size: 2.5rem;
        }
    }

    &&:has(.confirm-setting-apply.hidden),
    &&:has(.toggler-icon) {
        cursor: pointer;
    }
`

export { SettingsOptionContainer };
