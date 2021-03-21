import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        /* height: 100%; */
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
    }

`;

export default GlobalStyle;