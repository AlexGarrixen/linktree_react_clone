import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme, { GlobalStyle } from '@theme/index';
import '../styles/global.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
