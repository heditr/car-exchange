import styled from "styled-components";

const UserImage = styled.span`
  height: 36px;
  width: 36px;
  background: url('${(props) => props.url }') no-repeat;
  border-radius: 18px;
  display: inline-block;
  z-index: 1000;
`;

export const UserImageContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  margin-top: 20px;
  @media(max-width: 768px) {
    margin-top: 8px;
  }
`;

export const UserImageTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 80%;
  margin-left: 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const BaseTitle = styled.span`
  font-size: 14px;
  line-height: 17px;
  width: 100%;
  @media(max-width: 768px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

const Title = styled(BaseTitle)`
  font-family: MontserratBold;
  font-weight: bold;
`;

const SubTitle = styled(BaseTitle)`
  font-family: Montserrat;
  font-weight: normal;
`;

export const UserImageWithTitle = (props) => {
  return (
    <UserImageContainer>
      <UserImage url={props.url} />
      <UserImageTextContainer>
        <Title>{props.title}</Title>
        <SubTitle>{props.subtitle}</SubTitle>
      </UserImageTextContainer>
    </UserImageContainer>
  );
}

export default UserImage;
