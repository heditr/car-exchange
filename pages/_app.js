import * as React from 'react';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import reset from 'styled-reset';
import GlobalFonts from '../components/fonts/index';

const GlobalStyle = createGlobalStyle`
  ${reset};
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

const theme = {
  blue: '#05668D',
  green: '#00C39A',
  black: '#494949',
  gray: '#C6C6C6',
};

export default function App({Component, pageProps}) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalFonts.MontserratLight />
      <GlobalFonts.MontserratBold />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
