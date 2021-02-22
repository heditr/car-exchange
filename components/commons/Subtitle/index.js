import styled, { css } from "styled-components";

const SubTitle = styled.div`
  font-family: Montserrat;
  font-size: 20px;
  line-height: 30px;
  font-weight: 500;
  color: ${(props) => props.theme.black};
  margin-left:auto;
  margin-right:auto;
  margin-top: 35px;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 22px;
    margin-top: 20px;
  }
`;

export default SubTitle;
