import styled from 'styled-components'
import backgroundTitle from '../../assets/image_home.jpg'
import colors from '../../utils/style/colors'

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const HomeContainer = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 30px;
  display: flex;
  flex-direction: column;
`

const TitleWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 223px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundTitle});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  border-radius: 2px;
  box-shadow: 0px 4px 4px 0px #00000040;
`;

const TitleOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const StyledTitle = styled.h2`
  position: relative;
  font-weight: 700;
  font-size: 48px;
  color: #FFFFFF;
  border: 1px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  margin-top: 43px;
  background-color: ${colors.backgroundGallery};
  padding: 50px;
  border-radius: 15px;
`;

const GalleryItem = styled.div`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(10, 10, 10, 0) 42%, rgba(4, 4, 4, 0.205) 99.99%, rgba(0, 0, 0, 0.5) 100%),
  ${colors.primary};
  height: 340px; 
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 18px;
  color: white;
`;


function Home() {
  return (
    <HomeWrapper>
      <HomeContainer>
        <TitleWrapper>
          <TitleOverlay />
          <StyledTitle>
            Chez vous, partout et ailleurs
          </StyledTitle>
        </TitleWrapper>
        <GalleryWrapper>
          {/* Remplacez les divs ci-dessous par les éléments réels de votre galerie */}
          <GalleryItem>Titre de la location</GalleryItem>
          <GalleryItem>Titre de la location</GalleryItem>
          <GalleryItem>Titre de la location</GalleryItem>
          <GalleryItem>Titre de la location</GalleryItem>
          <GalleryItem>Titre de la location</GalleryItem>
          <GalleryItem>Titre de la location</GalleryItem>
        </GalleryWrapper>
      </HomeContainer>
    </HomeWrapper>
  );
}

export default Home;