import { DefaultTheme } from "styled-components";
import bgLarge from "../../src/assets/imgs/background-pattern-desktop.svg";
import bgSmall from "../../src/assets/imgs/background-pattern-mobile.svg";

export const theme: DefaultTheme = {
  colors: {
    white: "hsl(0, 0%, 100%)",
    light_pink: "hsl(275, 100%, 97%)",
    grayish_purple: "hsl(292, 16%, 49%)",
    dark_purple: "hsl(292, 42%, 14%)",
    shock_pink: "hsl(283 81.07% 52.35%)",
  },

  border: {
    radius: "15px",
  },

  fonts: {
    primary_font: "'Work Sans', sans-serif",
  },

  images: {
    background_large: bgLarge,
    background_small: bgSmall,
  },
};
