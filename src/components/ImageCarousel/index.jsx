import React, { useState, useEffect } from 'react';
import ArrowLeft from '../../assets/arrow_left.svg';
import ArrowRight from '../../assets/arrow_right.svg';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden; /* Masque les images hors du conteneur */
`;

const ImageWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 415px;
  border-radius: 10px;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PrevArrow = styled(ArrowButton)`
  left: 10px;
`;

const NextArrow = styled(ArrowButton)`
  right: 10px;
`;

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    if (currentIndex === images.length) {
      setTransition(false);
      setCurrentIndex(0);
      // Re-enable transition for next cycle
      setTimeout(() => setTransition(true), 0);
    } else if (currentIndex < 0) {
      setTransition(false);
      setCurrentIndex(images.length - 1);
      // Re-enable transition for next cycle
      setTimeout(() => setTransition(true), 0);
    }
  }, [currentIndex, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <CarouselContainer>
      <ImageWrapper
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: transition ? 'transform 0.5s ease-in-out' : 'none',
        }}
      >
        {images.map((image, index) => (
          <div key={index} style={{ flex: '0 0 100%' }}>
            <Image src={image} alt={`gallery-${index}`} />
          </div>
        ))}
        {/* Optionally duplicate the first and last image for visual continuity */}
        <div style={{ flex: '0 0 100%' }}>
          <Image src={images[0]} alt="gallery-duplicate-first" />
        </div>
      </ImageWrapper>
      <PrevArrow onClick={goToPrevious}>
        <img src={ArrowLeft} alt="Previous" style={{ height: '80px' }} />
      </PrevArrow>
      <NextArrow onClick={goToNext}>
        <img src={ArrowRight} alt="Next" style={{ height: '80px' }} />
      </NextArrow>
    </CarouselContainer>
  );
};

export default ImageCarousel;
