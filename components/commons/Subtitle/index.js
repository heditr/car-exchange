import styled, { css } from "styled-components";

const SubTitle = styled.div`
  font-family: Montserrat;
  ${({fontSize}) => css`
    font-size: ${fontSize}px;
  `};
  line-height: 30px;
  font-weight: 500;
  color: ${(props) => props.theme.black};
  margin-left:auto;
  margin-right:auto;
  margin-top: 35px;
`;

export default SubTitle;
