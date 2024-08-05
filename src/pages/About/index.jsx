import React from 'react';
import styled from 'styled-components';
import ExpandableSection from '../../components/ExpandableSection';
import backgroundAbout from '../../assets/image_about.jpg';

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
  gap: 10px;
  margin: 43px auto 0;
  padding: 0;
  border-radius: 5px;
  position: relative;
`;

function Home() {
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
            <ExpandableSection 
              key={index}
              title={category.name}
              content={<p>{category.text}</p>} 
            />
          ))}
        </GalleryWrapper>
      </HomeContainer>
    </HomeWrapper>
  );
}

export default Home;
