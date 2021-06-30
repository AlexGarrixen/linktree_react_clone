import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#7C41FF',
    success: '#00D775',
    white: '#fff',
    gray: {
      100: '#F5F6F8',
      200: '#D7DCE1',
      300: '#ACB5BF',
      400: '#0A0B0D',
      500: '#131415',
    },
  },
  screens: {
    xs: '320px',
    sm: '600px',
    md: '960px',
    lg: '1280px',
    xl: '1920px',
  },
  fontSizes: {
    xs: { size: '0.75rem', lineHeight: '1.25rem' },
    sm: { size: '0.875rem', lineHeight: '1.375rem' },
    base: { size: '1rem', lineHeight: '1.5rem' },
    lg: { size: '1.25rem', lineHeight: '1.75rem' },
    xl: { size: '1.5rem', lineHeight: '2rem' },
    '2xl': { size: '1.875rem', lineHeight: '2.375rem' },
    '3xl': { size: '2.375rem', lineHeight: '2.875rem' },
    '4xl': { size: '2.875rem', lineHeight: '3.375rem' },
    '5xl': { size: '3.5rem', lineHeight: '4rem' },
  },
  borderRadius: {
    base: '16px',
  },
  fontFamily: {
    sans: 'Inter, sans-serif',
  },
};

export * from './global-styles';

export default theme;
