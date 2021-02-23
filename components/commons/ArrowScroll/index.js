import styled from "styled-components";

export const Arrow = styled.i`
  border: solid ${(props) => props.theme.black};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  vertical-align: middle;
  transform: rotate(-45deg);
`

const ArrowScroll = styled.span`
  height: 64px;
  width: 64px;
  background: #FFFFFF;
  border-radius: 50px;
  display: inline-block;
  z-index: 1000;
  cursor: pointer;
  &:after{
    content: '';
    border: solid ${(props) => props.theme.black};
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 9px;
    margin-top: 21px;
    margin-left: 16px;
    vertical-align: middle;
    transform: rotate(-45deg);
  }
`;

export default ArrowScroll;
