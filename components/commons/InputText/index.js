import styled from "styled-components";

const InputText = styled.input`
  font-family: Montserrat;
  background: #FFFFFF;
  border: 1px solid ${(props) => props.theme.gray};
  box-sizing: border-box;
  border-radius: 6px;
  width: 400px;
  height: 64px;
  font-weight: bold;
  font-size: 18px;
  color: ${(props) => props.theme.black};
  padding: 24px;
  &::placeholder{
    color: ${(props) => props.theme.gray};
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    font-style: normal;
  }
  &:focus{
    border: 1px solid ${(props) => props.theme.black};
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

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

const StyledInput = (props) => {
  const { inputTitle } = props;

  return (
    <InputContainer>
      <InputTitle>{inputTitle}</InputTitle>
      <InputText { ...props } />
    </InputContainer>
  );
};

export default InputText;
export {
  StyledInput
};
