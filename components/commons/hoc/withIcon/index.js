import geoIcon from '../../../../public/pos_icon.svg';
import SvgCreator from "../../SvgCreator";
import styled from "styled-components";

const InputContainer = styled.div`
  position: relative;
  flex-grow: 2;
  flex-shrink: 4;
  @media(max-width: 768px) {
    width: 100%;
  }
`;
const Icon = styled(SvgCreator)`
  position: absolute;
  top: 20px;
  right: 23px;
`;

const VerticalLine = styled.div`
  height: 33px;
  border-left: 1px solid ${(props) => props.theme.gray};
  position: absolute;
  top: 15px;
  right: 65px;
`;

const withIcon = (Input) => (props) => {
  return (
    <InputContainer>
      <Input {...props} />
      <VerticalLine />
      <Icon url={geoIcon} width={24} height={24} />
    </InputContainer>
  );
};

export default withIcon;
