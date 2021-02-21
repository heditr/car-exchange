import styled, { css } from "styled-components";

const Title = styled.div`
  font-family: MontserratBold;
  ${({fontSize}) => css`
    font-size: ${fontSize}px;
  `};
  line-height: 80px;
  letter-spacing: -0.03em;
  font-weight: bold;
`;

export default Title;
