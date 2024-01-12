import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-size: 1.6rem;
      font-family: ${({ theme }) => theme.fonts.primary_font};
    }

    html {
      font-size: 62.5%;
    }

    body {
      background-color: ${({ theme }) => theme.colors.light_pink};
      background-image: url("/images/background-pattern-desktop.svg");
      background-repeat: no-repeat;
      background-size: contain;

     @media screen and (max-width: 768px) {
      background-image: url("/images/background-pattern-mobile.svg");
     }
    }

    h1 {
      font-weight: 700;
    }

    h2 {
      font-weight: 600;
    }

    ul,li {
      list-style: none;
    }

    main {
      display: flex;
      min-height: 100vh;
      align-items: center;
      justify-content: center;
      padding-inline: 2rem;
    }

`;
