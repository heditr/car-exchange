import styled from "styled-components";
import Button from "../commons/Button";
import { StyledLink } from "../commons/Link";
import Nav from "../Nav";

const _MenuTop = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-content: flex-end;
  margin: auto;
  flex-basis: auto;
  justify-content: space-between;
`;

const _BtnContainer = styled.div`
  align-content: flex-end;
`

const MenuTop = () => {
  return (
    <_MenuTop>
      <Nav>
          <StyledLink>Acheter</StyledLink>
          <StyledLink>Conseils</StyledLink>
          <StyledLink>Qui sommes nous?</StyledLink>
      </Nav>
      <_BtnContainer>
        <Button width={240}>Vendre ma voiture</Button>
      </_BtnContainer>
    </_MenuTop>
  );
};

export default MenuTop;
