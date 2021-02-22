import styled from "styled-components";
import Logo from "../commons/Logo";
import HiddenCheckbox from "../commons/Checkbox";
import Burger from "../commons/Burger";
import SvgCreator from "../commons/SvgCreator";
import burgerIcon from "../../public/burger.svg";
import Nav from "../Nav";
import {StyledLink} from "../commons/Link";
import Button from "../commons/Button";

const Banner = styled.div`
  display: flex;
  width: 100%;
  height: 72px;
  background: #FFFFFF;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`;

const ButtonToEnd = styled(Button)`
  align-content: flex-end;
  margin: 20px;
  @media(max-width: 768px) {
    display: none;
  }
`;

const BannerTop = () => {
  return (
    <Banner>
      <Logo alt="Car exchange" />
      <Burger htmlFor="burger_mr">
        <SvgCreator url={burgerIcon} width={29} height={22} />
      </Burger>
      <HiddenCheckbox/>
      <Nav className="mr-nav-menu">
        <StyledLink>Acheter</StyledLink>
        <StyledLink>Conseils</StyledLink>
        <StyledLink>Qui sommes nous?</StyledLink>
      </Nav>
      <ButtonToEnd width={230} height={48}>Vendre ma voiture</ButtonToEnd>
    </Banner>
  );
};

export default BannerTop;
