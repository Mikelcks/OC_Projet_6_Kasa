import React, { useState } from 'react';
import styled from 'styled-components'
import backgroundAbout from '../../assets/image_about.jpg'
import colors from '../../utils/style/colors'
import vector from '../../assets/arrow_vector.svg'

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
  justify-content: center; /* Centre le texte horizontalement */
  width: 100%;
`;

const GalleryAbout = styled.div`
  background-color: ${colors.primary};
  height: 52px; 
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 24px;
  color: white;
  position: relative;
  cursor: pointer; /* Indique que c'est cliquable */
`;

const ArrowIcon = styled.img.attrs({
  src: vector,
})`
  width: 24px; /* Ajuste la taille de l'icône selon tes besoins */
  height: auto;
  transition: transform 0.3s; /* Pour une animation fluide si besoin */
`;

const HiddenText = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  width: 99%;
  font-size: 18px;
  color: black;
  background-color: ${colors.backgroundGallery};
  border-radius: 0 0 5px 5px;
  padding: 10px;
  box-sizing: border-box;
  text-align: left;
`;


function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleText = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = [
    { name: 'Fiabilité', text: 'Texte détaillé pour la fiabilité.' },
    { name: 'Respect', text: 'Texte détaillé pour le respect.' },
    { name: 'Service', text: 'Texte détaillé pour le service.' },
    { name: 'Sécurité', text: 'Texte détaillé pour la sécurité.' }
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
                <ArrowIcon />
              </GalleryAbout>
              <HiddenTextWrapper>
                <HiddenText isOpen={openIndex === index}>
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