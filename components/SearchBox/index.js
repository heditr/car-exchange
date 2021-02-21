import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import styled, { css } from 'styled-components';
import image from '../../public/search-box-bg.png';
import Title from '../commons/Title';
import SubTitle from '../commons/Subtitle';
import {StyledInput} from '../commons/InputText';
import Button from '../commons/Button';

const StyledSearchBox = styled.div`
  width: 100%;
  height: 630px;
  background: url('${image}') no-repeat;
  background-origin: content-box;
  background-size: cover;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: 45px;
`;
const ContainerBox = styled.div`
  width: 92%;
  height: 60%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: auto;
`;
const StyledSpan = styled.span`
  color: ${({ color }) => color };
`;

const SearchBox = () => {
  const theme = useContext(ThemeContext);

  return (
    <StyledSearchBox>
      <ContainerBox>
        <Title fontSize={54}>
          <p>
            Concessionnaire en ligne spécialiste
            <br /> de <StyledSpan color={theme.blue}>l'achat</StyledSpan>
            &nbsp;et la <StyledSpan color={theme.green}>vente</StyledSpan> de voitures d'occasion
          </p>
          <SubTitle fontSize={20}>
            <p> Trouver une petite annonce de annonce de voiture d'occasion près de chez vous ou partout en France : </p>
          </SubTitle>
        </Title>
        <InputContainer>
          <StyledInput placeholder="Modèle" inputTitle="Quel véhicule recherchez vous ?" />
          <StyledInput placeholder="Ex: Paris" inputTitle="Ville, département" />
          <Button width={230} height={64}>Recherche</Button>
        </InputContainer>
      </ContainerBox>
    </StyledSearchBox>
  );
};

export default SearchBox;
