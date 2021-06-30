import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      success: string;
      white: string;
      gray: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
      };
    };
    screens: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    fontSizes: {
      xs: { size: string; lineHeight: string };
      sm: { size: string; lineHeight: string };
      base: { size: string; lineHeight: string };
      lg: { size: string; lineHeight: string };
      xl: { size: string; lineHeight: string };
      '2xl': { size: string; lineHeight: string };
      '3xl': { size: string; lineHeight: string };
      '4xl': { size: string; lineHeight: string };
      '5xl': { size: string; lineHeight: string };
    };
    fontFamily: {
      sans: string;
    };
    borderRadius: {
      base: string;
    };
  }
}
