import styled from 'styled-components';
import image from '../../public/search-box-bg.png';
import Title from '../commons/Title';
import SubTitle from "../commons/Subtitle";

const StyledSearchBox = styled.div`
  width: 100%;
  height: 630px;
  background: url('${image}') no-repeat;
  background-origin: content-box;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const SearchBox = () => {
  return (
    <StyledSearchBox>
      <Title fontSize={54}>
        <p>
          Concessionnaire en ligne spécialiste
          <br /> de <span>l'achat</span> et la <span>vente</span> de voitures d'occasion
        </p>
        <SubTitle fontSize={20}>
          <p> Trouver une petite annonce de annonce de voiture d'occasion près de chez vous ou partout en France : </p>
        </SubTitle>
      </Title>

    </StyledSearchBox>
  );
}

export default SearchBox;
