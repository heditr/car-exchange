import styled, { css } from "styled-components";

const Title = styled.div`
  font-family: MontserratBold;
  font-size: 54px;
  line-height: 80px;
  letter-spacing: -0.03em;
  font-weight: bold;
  text-align: justify;
  text-justify: inter-word;
  @media(max-width: 768px) {
    font-size: 32px;
    line-height: 39px;
    letter-spacing: -0.03em;
  }
`;

export default Title;
