import { createGlobalStyle } from "styled-components";

const reset = `
    html {
        min-height: 100vh;
    }

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
        max-width: 100%;
    }
`;

const GlobalStyle = createGlobalStyle`
    ${reset}
`;

export default GlobalStyle;
