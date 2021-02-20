import styled, { css } from 'styled-components'

const Button = styled.button`
  background: #00C39A;
  border-radius: 6px;
  color: #FFFFFF;
  padding: 15px;
  border: 0;
  cursor: pointer;
  outline: none;
  ${({width, height}) => css`
    width: ${width}px;
    height: ${height}px;
  `}
`;

export default Button;
