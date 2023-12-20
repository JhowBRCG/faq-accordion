import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      light_pink: string;
      grayish_purple: string;
      dark_purple: string;
      shock_pink: string;
    };

    border: {
      radius: string;
    };

    fonts: {
      primary_font: string;
    };

    images: {
      background_large: string;
      background_small: string;
    };
  }
}
