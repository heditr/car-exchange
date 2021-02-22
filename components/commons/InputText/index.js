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

export default InputText;
