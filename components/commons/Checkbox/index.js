import styled from 'styled-components';

const HiddenCheckbox = styled.input.attrs({
  type: 'checkbox',
  id: 'burger_mr'
})`
  display: none;
  &:checked ~ .mr-nav-menu {
    max-height: 240px;
    display: flex;
    flex-direction: column;
  }
`;

export default HiddenCheckbox;
