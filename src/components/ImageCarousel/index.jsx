import React, { useState, useEffect } from 'react';
import ArrowLeft from '../../assets/arrow_left.svg';
import ArrowRight from '../../assets/arrow_right.svg';
import styles from './image_carousel.module.scss';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    if (currentIndex === images.length) {
      setTransition(false);
      setCurrentIndex(0);
      setTimeout(() => setTransition(true), 0);
    } else if (currentIndex < 0) {
      setTransition(false);
      setCurrentIndex(images.length - 1);
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
    <div className={styles.carouselContainer}>
      <div
        className={styles.imageWrapper}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: transition ? 'transform 0.5s ease-in-out' : 'none',
        }}
      >
        {images.map((image, index) => (
          <div key={index} style={{ flex: '0 0 100%' }}>
            <img className={styles.image} src={image} alt={`gallery-${index}`} />
          </div>
        ))}
        {/* Optionally duplicate the first and last image for visual continuity */}
        <div style={{ flex: '0 0 100%' }}>
          <img className={styles.image} src={images[0]} alt="gallery-duplicate-first" />
        </div>
      </div>
      <button className={`${styles.arrowButton} ${styles.prevArrow}`} onClick={goToPrevious}>
        <img src={ArrowLeft} alt="Previous"/>
      </button>
      <button className={`${styles.arrowButton} ${styles.nextArrow}`} onClick={goToNext}>
        <img src={ArrowRight} alt="Next"/>
      </button>
      <div className={styles.counter}>
        {`${currentIndex + 1}/${images.length}`}
      </div>
    </div>
  );
};

export default ImageCarousel;
