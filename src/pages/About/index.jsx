import React, { useState } from 'react';
import styled from 'styled-components';
import backgroundAbout from '../../assets/image_about.jpg';
import colors from '../../utils/style/colors';
import vector from '../../assets/arrow_vector.svg';

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const HomeContainer = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 30px;
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 223px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundAbout});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  border-radius: 25px;
  box-shadow: 0px 4px 4px 0px #00000040;
`;

const GalleryWrapper = styled.div`
  width: 1023px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 43px auto 0;
  padding: 0;
  border-radius: 5px;
  position: relative;
`;

const HiddenTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const GalleryAbout = styled.div`
  background-color: ${colors.primary};
  height: 52px; 
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px 10px 15px;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 24px;
  color: white;
  position: relative;
  cursor: pointer;
`;

const ArrowIcon = styled.img.attrs({
  src: vector,
})`
  width: 24px;
  height: auto;
  transition: transform 0.3s;
  transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(360deg)')};
`;

const HiddenText = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  width: 100%;
  font-size: 20px;
  line-height: 1.3;
  color: black;
  background-color: ${colors.backgroundGallery};
  border-radius: 0 0 5px 5px;
  padding: 20px;
  box-sizing: border-box;
  text-align: left;
`;

const isOpen = (index, openIndexes) => openIndexes.includes(index);

function Home() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleText = (index) => {
    setOpenIndexes(prevIndexes =>
      prevIndexes.includes(index)
        ? prevIndexes.filter(i => i !== index)
        : [...prevIndexes, index]
    );
  };

  const categories = [
    { name: 'Fiabilité', text: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.' },
    { name: 'Respect', text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
    { name: 'Service', text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
    { name: 'Sécurité', text: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipe de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.' }
  ];

  return (
    <HomeWrapper>
      <HomeContainer>
        <TitleWrapper></TitleWrapper>
        <GalleryWrapper>
          {categories.map((category, index) => (
            <div key={index}>
              <GalleryAbout onClick={() => toggleText(index)}>
                {category.name}
                <ArrowIcon isOpen={isOpen(index, openIndexes)} />
              </GalleryAbout>
              <HiddenTextWrapper>
                <HiddenText isOpen={isOpen(index, openIndexes)}>
                  {category.text}
                </HiddenText>
              </HiddenTextWrapper>
            </div>
          ))}
        </GalleryWrapper>
      </HomeContainer>
    </HomeWrapper>
  );
}

export default Home;
