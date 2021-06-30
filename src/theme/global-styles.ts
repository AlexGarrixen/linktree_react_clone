import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
	  box-sizing: border-box;
    outline: none;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily.sans};
  }

  h1, h2, h3, h4, h5, h6, p, a {
    margin: 0;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes['4xl'].size};
    line-height: ${({ theme }) => theme.fontSizes['4xl'].lineHeight};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes['3xl'].size};
    line-height: ${({ theme }) => theme.fontSizes['3xl'].lineHeight};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes['2xl'].size};
    line-height: ${({ theme }) => theme.fontSizes['2xl'].lineHeight};
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSizes.xl.size};
    line-height: ${({ theme }) => theme.fontSizes.xl.lineHeight};
  }

  h5 {
    font-size: ${({ theme }) => theme.fontSizes.lg.size};
    line-height: ${({ theme }) => theme.fontSizes.lg.lineHeight};
  }

  h6 {
    font-size: ${({ theme }) => theme.fontSizes.base.size};
    line-height: ${({ theme }) => theme.fontSizes.base.lineHeight};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.base.size};
    line-height: ${({ theme }) => theme.fontSizes.base.lineHeight};
  }

  ul {
    margin: 0;
    padding-left: 0;
  }

  li, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
  }

  button {
    border: none;
    cursor: pointer;
    padding: 0;
  }
`;
