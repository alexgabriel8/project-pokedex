import { createGlobalStyle } from "styled-components";

const reset = `
    * {
        padding: 0;
        margin: 0;
        border: none;
        outline: none;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }

    ul, ol {
        list-style: none;
    }

    img {
        width: 100%;
    }
`;

const GlobalStyle = createGlobalStyle`
    ${reset}
    
    * {
        font-family: "Sora", sans-serif;
    }

    body {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #root {
        display: flex;
        width: 100vw;
        max-width: 2500px;
        height: 100vh;
        max-height: 1600px;
    }

    h1 {
        font-size: clamp(1.2rem, 1.2rem + 1.3vw, 4rem);
    }

    p {
        --f: clamp(1rem, 1rem + 1vw, 3.5rem);
        font-size: var(--f);
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyle;
