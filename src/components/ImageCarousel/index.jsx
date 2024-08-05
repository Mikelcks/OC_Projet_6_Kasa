import React from 'react';
import Slider from 'react-slick';
import ArrowLeft from '../../assets/arrow_left.svg';
import ArrowRight from '../../assets/arrow_right.svg';
import styled from 'styled-components';

const ArrowButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  border: none;
  border-radius: 50%;
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
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <PrevArrow>
        <img src={ArrowLeft} alt="Previous" style={{ height: '80px' }} />
      </PrevArrow>
    ),
    nextArrow: (
      <NextArrow>
        <img src={ArrowRight} alt="Next" style={{ height: '80px' }} />
      </NextArrow>
    ),
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`gallery-${index}`} style={{ width: '100%', height: 'auto', maxHeight: '415px', borderRadius: '10px' }} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
