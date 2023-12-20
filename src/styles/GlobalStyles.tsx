import { createGlobalStyle } from "styled-components";
import bgLarge from "../assets/imgs/background-pattern-desktop.svg";
import bgSmall from "../assets/imgs/background-pattern-mobile.svg";

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
     background-image: url(${bgLarge});
     background-repeat: no-repeat;
     background-size: contain;

     @media screen and (max-width: 768px) {
      background-image: url(${bgSmall});
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