import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  flex-grow: 2;
  flex-shrink: 4;
  @media(max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const InputTitle = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 16px;
`;


const withTitle = (Input) => (props) => {
  const { inputTitle } = props;
  return (
    <InputContainer>
      <InputTitle>{inputTitle}</InputTitle>
      <Input { ...props   } />
    </InputContainer>
  );
};

export default withTitle;
