import styled from "styled-components";
import Logo from "../commons/Logo";
import Button from "../commons/Button";
import MenuTop from "../MenuTop";

const Banner = styled.div`
  display: flex;
  width: 100%;
  height: 72px;
  background: #FFFFFF;
  flex-wrap: nowrap;
`;

const BannerTop = () => {
  return (
    <Banner>
        <Logo alt="Car exchange" />
        <MenuTop />
    </Banner>
  );
};

export default BannerTop;
