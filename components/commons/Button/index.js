import styled from 'styled-components'

const Button = styled.button`
  background: #00C39A;
  border-radius: 6px;
  color: #FFFFFF;
  padding: 15px;
  border: 0;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

export default Button;
