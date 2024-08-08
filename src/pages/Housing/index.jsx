import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ImageCarousel from '../../components/ImageCarousel';
import StarRating from '../../components/StarRating';
import ExpandableSection from '../../components/ExpandableSection';
import data from '../../data/data.json';
import styles from './housing.module.scss';

const Housing = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = data.find((item) => item.id === id);

  useEffect(() => {
    if (!item) {
      navigate('/error', { replace: true });
    }
  }, [item, navigate]);

  if (!item) {
    return null;
  }

  const handlePrevClick = () => {
    console.log('Previous Arrow Clicked');
  };

  const handleNextClick = () => {
    console.log('Next Arrow Clicked');
  };

  return (
    <div className={styles.container}>
      <ImageCarousel
        images={item.pictures}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
      />
      <div className={styles.header}>
        <div className={styles['title-location']}>
          <h1>{item.title}</h1>
          <p>{item.location}</p>
        </div>
        <div className={styles['host-info']}>
          <p className={styles['host-name']}>{item.host.name}</p>
          <img
            src={item.host.picture}
            alt={item.host.name}
            className={styles['host-picture']}
          />
        </div>
      </div>
      <div className={styles['tags-rating']}>
        <ul className={styles['horizontal-list']}>
          {item.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
        <div className={styles.rating}>
          <StarRating rating={item.rating} />
        </div>
      </div>
      <div className={styles['section-container']}>
        <div className={styles['expandable-section']}>
          <ExpandableSection
            title="Déscription"
            content={<p>{item.description}</p>}
          />
        </div>
        <div className={styles['expandable-section']}>
          <ExpandableSection
            title="Équipements"
            content={
              <ul>
                {item.equipments.map((equip, index) => (
                  <li key={index}>{equip}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Housing;
