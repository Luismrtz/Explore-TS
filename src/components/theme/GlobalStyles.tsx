import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {

        font-size: 62.5%;
        box-sizing: border-box;
    }
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
    }
    body {
        background-color: ghostwhite;
        font-family: 'Open Sans', sans-serif;
    }

`;

export default GlobalStyle;
