import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
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

export default function App({Component, pageProps}) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <GlobalFonts.MontserratLight />
      <GlobalFonts.MontserratBold />
      <Component {...pageProps} />
    </React.Fragment>
  );
};
