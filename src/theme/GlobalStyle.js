import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    html{
        font-size: 62.5%;
    }
    body {
        font-size: 1.6rem; // happy rems
        font-family: 'Montserrat', sans-serif;
        background-color: ${({ theme }) => theme.background};
    }

    html, body {
        margin: 0;
        padding: 0;
        display: flex;
        width: 100%;
        height: 100%;
    }

    #root {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
`;

export default GlobalStyle;
