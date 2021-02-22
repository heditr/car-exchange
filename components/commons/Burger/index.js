import styled from 'styled-components';

const Burger = styled.label`
  cursor: pointer;
  user-select: none;
  float: right;
  padding: 20px;
  @media(min-width: 768px) {
    display: none;
  }
`;

export default Burger;
