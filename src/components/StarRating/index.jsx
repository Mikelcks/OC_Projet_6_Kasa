import React from 'react';
import activeStarImg from '../../assets/star_active.svg';
import inactiveStarImg from '../../assets/star_inactive.svg';
import './starRating.css';

const StarRating = ({ rating }) => {
  const activeStarCount = Math.floor(rating);
  const inactiveStarCount = 5 - activeStarCount;

  return (
    <div className="star-rating">
      {[...Array(activeStarCount)].map((_, index) => (
        <img key={index} src={activeStarImg} alt="Full Star" className="star full" />
      ))}
      {[...Array(inactiveStarCount)].map((_, index) => (
        <img key={index} src={inactiveStarImg} alt="Empty Star" className="star empty" />
      ))}
    </div>
  );
};

export default StarRating;
