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

        

        @media screen and (max-width: 1000px) {
            padding-left: 0;
        }

        @media screen and (max-width: 768px) {
            padding-bottom: 10rem;
        }
    }

    html {
        font-size: 62.5%;
        font-family: 'Roboto', sans-serif;

        --white: #fff;
        --gray: #999;
        --black: #000;
        --body: #141414;
        --yellow: #FFCB47;

        @media screen and (max-width: 1024px) {
            font-size: 50%;
        }
    }
`;
