import styled from "styled-components";
import Button from "../commons/Button";
import Link from "../commons/Link";
import Nav from "../Nav";

const _MenuTop = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const MenuTop = () => {
  return (
    <_MenuTop>
      <Nav>
          <Link>Acheter</Link>
          <Link>Conseils</Link>
          <Link>Qui sommes nous?</Link>
      </Nav>
      <Button width={240}>Vendre ma voiture</Button>
    </_MenuTop>
  );
};

export default MenuTop;
