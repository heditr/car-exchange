import styled from "styled-components";
import Logo from "../commons/Logo";
import MenuTop from "../MenuTop";

const Banner = styled.div`
  display: flex;
  width: 100%;
  height: 72px;
  background: #FFFFFF;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const _LogoContainer = styled.div`
  display: inline-block;
  align-content: flex-start;
  margin: auto;
`;

const BannerTop = () => {
  return (
    <Banner>
        <_LogoContainer>
          <Logo alt="Car exchange" />
        </_LogoContainer>
        <MenuTop />
    </Banner>
  );
};

export default BannerTop;
