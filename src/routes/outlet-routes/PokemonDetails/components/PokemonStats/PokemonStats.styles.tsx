import styled from "styled-components";

const Stats = styled.ul`
    margin: 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: calc(10px + 0.9vw);

    font-size: clamp(1rem, 0.8rem + 0.5vw, 2rem);
`

export { Stats }