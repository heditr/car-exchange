import styled from 'styled-components';

const Card = styled.li`
  list-style: none;
  width: 380px;
  height: 220px;
  background: #FFFFFF;
  border-radius: 6px;
  box-shadow: 0 10px 6px -6px ${(props) => props.theme.gray };
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  line-height: 26px;
  display: inline;
  margin-right: 20px;
  color: #353535;
  padding: 25px 32px 0;
  flex-shrink: 0;
  cursor: grab;
  @media(max-width: 768px) {
    width: 213px;
    height: 166px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    padding: 18px 20px 0;
    margin-right: 10px;
    display: inline-block;
  }
`;

export default Card;
