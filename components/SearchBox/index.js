import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import styled, { css } from 'styled-components';
import image from '../../public/search-box-bg.png';
import Title from '../commons/Title';
import SubTitle from '../commons/Subtitle';
import Button from '../commons/Button';
import { InputWithIconWithTitle, InputWithTitle } from '../commons/RichInput';

const StyledSearchBox = styled.div`
  width: 100%;
  height: 630px;
  background: url('${image}') no-repeat;
  background-origin: content-box;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: 45px;
  @media(max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
`;
const ContainerBox = styled.div`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 60px 0 60px;
  flex-grow: 2;
  @media (max-width: 768px) {
    padding: 20px 20px 0 20px;
  }
`;
const StyledSpan = styled.span`
  color: ${({ color }) => color };
`;
const StyledBtn = styled(Button)`
  max-width: 230px;
  height: 64px;
  flex-grow: 1;
  @media(max-width: 768px) {
    max-width: none;
    width: 100%;
    font-size: 22px;
  }
`;

const SearchBox = () => {
  const theme = useContext(ThemeContext);

  return (
    <StyledSearchBox>
      <ContainerBox>
        <Title>
          <p>
            Concessionnaire en ligne spécialiste
            de <StyledSpan color={theme.blue}>l'achat</StyledSpan>
            &nbsp;et la <StyledSpan color={theme.green}>vente</StyledSpan> de voitures d'occasion
          </p>
          <SubTitle>
            <p> Trouver une petite annonce de annonce de voiture d'occasion près de chez vous ou partout en France : </p>
          </SubTitle>
        </Title>
        <InputContainer>
          <InputWithTitle placeholder="Modèle" inputTitle="Quel véhicule recherchez vous ?" />
          <InputWithIconWithTitle placeholder="Ex: Paris" inputTitle="Ville, département" />
          <StyledBtn>Rechercher</StyledBtn>
        </InputContainer>
      </ContainerBox>
    </StyledSearchBox>
  );
};

export default SearchBox;
