import SvgCreator from '../SvgCreator';
import logo from '../../../public/mr-logo.svg';
import styled from "styled-components";

const Logo = styled(SvgCreator).attrs({
  role: 'img',
  width: 98,
  height: 40,
  url: logo,
})`
  cursor: pointer;
  margin: 20px;
`;

export default Logo;
