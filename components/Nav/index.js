import styled from "styled-components";

const Nav = styled.div`
  max-height: 0;
  transition: max-height .2s ease-out;
  display: none;

  /** Desktop */
  @media (min-width: 768px) {
    max-height: none;
    display: flex;
    padding: 10px;
    box-sizing: border-box;
    justify-content: flex-end;
    vertical-align: middle;
    align-items: center;
    flex-grow: 2;  
  }
`;

export default Nav;
