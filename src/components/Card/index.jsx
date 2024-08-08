import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './card.module.scss';

const Card = ({ id, title, cover }) => (
  <Link to={`/item/${id}`} style={{ textDecoration: 'none' }}>
    <div className={styles.cardWrapper}>
      <img src={cover} alt={title} className={styles.cardCover} />
      <div className={styles.textContainer}>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
    </div>
  </Link>
);

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Card;
