import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        padding-left: 10rem;
        background-color: var(--body);
    }

    html {
        font-size: 62.5%;
        font-family: 'Roboto', sans-serif;

        --white: #fff;
        --gray: #999;
        --black: #000;
        --body: #141414;
        --yellow: #FFCB47
    }
`;
