import styled from 'styled-components';
import Title from '../commons/Title';
import CardList from '../commons/CardList';
import Card from '../commons/Card';
import ArrowScroll from '../commons/ArrowScroll';
import UserImage, {UserImageWithTitle} from '../commons/UserImage';
import userLogo from '../../public/user1.png';

const Reviews = styled.div`
  background: rgba(5, 102, 141, 0.1);
  width: 100%;
  padding: 60px 60px 0 60px;
  height: 470px;
  overflow-x: hidden;
  position: relative;
  @media (max-width: 768px) {
    padding: 20px 20px 0 20px;
  }
`;
const StyledTitle = styled(Title)`
  margin-bottom: 30px;
`;

const StyledArrowScroll = styled(ArrowScroll)`
  position: absolute;
  top: 50%;
  right: 5%;
  @media (max-width: 768px) {
    display: none;
  }
`;

const VerifiedReviews = () => (
  <Reviews>
    <StyledTitle>Avis clients</StyledTitle>
    <StyledArrowScroll />
    <CardList>
      <Card>
        <p>
          “ En déposant mon annonce sur Annonces-auto.meilleure-reprise.com j’ai pu vendre ma voiture d’occasion rapidement et sans risques “
        </p>
        <UserImageWithTitle url={userLogo} title="Florence" subtitle="Directrice générale" />
      </Card>
      <Card>
        <p>
          “ En déposant mon annonce sur Annonces-auto.meilleure-reprise.com j’ai pu vendre ma voiture d’occasion rapidement et sans risques “
        </p>
        <UserImageWithTitle url={userLogo} title="Florence" subtitle="Directrice générale" />
      </Card>
      <Card>
        <p>
          “ En déposant mon annonce sur Annonces-auto.meilleure-reprise.com j’ai pu vendre ma voiture d’occasion rapidement et sans risques “
        </p>
        <UserImageWithTitle url={userLogo} title="Florence" subtitle="Directrice générale" />
      </Card>
      <Card>
        <p>
          “ En déposant mon annonce sur Annonces-auto.meilleure-reprise.com j’ai pu vendre ma voiture d’occasion rapidement et sans risques “
        </p>
        <UserImageWithTitle url={userLogo} title="Florence" subtitle="Directrice générale" />
      </Card>
      <Card>
        <p>
          “ En déposant mon annonce sur Annonces-auto.meilleure-reprise.com j’ai pu vendre ma voiture d’occasion rapidement et sans risques “
        </p>
        <UserImageWithTitle url={userLogo} title="Florence" subtitle="Directrice générale" />
      </Card>
    </CardList>
  </Reviews>
)

export default VerifiedReviews;
