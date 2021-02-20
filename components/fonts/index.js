import { createGlobalStyle } from 'styled-components';
import montserratLight1 from '../../public/fonts/Montserrat-Light.woff';
import montserratLight2 from '../../public/fonts/Montserrat-Light.woff2';
import montserratBold1 from '../../public/fonts/Montserrat-Light.woff';
import montserratBold2 from '../../public/fonts/Montserrat-Light.woff2';

const MontserratLight = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url(${montserratLight2}) format('woff2'),
         url(${montserratLight1}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
`;

const MontserratBold = createGlobalStyle`
  @font-face {
    font-family: 'MontserratBold';
    src: url(${montserratBold2}) format('woff2'),
         url(${montserratBold1}) format('woff');
    font-weight: bold;
    font-style: normal;
  }
`;

export default {
  MontserratBold,
  MontserratLight,
};
