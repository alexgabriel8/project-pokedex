import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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

export default GlobalStyle;
