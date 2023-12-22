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
        font-size: clamp(1.5rem, 2vw + 1rem, 2.25rem);
    }

    h2 {
        font-size: clamp(1.3rem, 2vw + 0.8rem, 2.05rem);
    }

    p {
        font-size: clamp(1rem, 2vw + 0.5rem, 1.85rem);
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyle;
