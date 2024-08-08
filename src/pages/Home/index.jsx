import React, { useState, useEffect } from 'react';
import styles from './home.module.scss';
import Card from '../../components/Card';
import data from '../../data/data.json';

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);

  return (
    <div className={styles.homeWrapper}>
      <div className={styles.homeContainer}>
        <div className={styles.titleWrapper}>
          <div className={styles.titleOverlay}></div>
          <h2 className={styles.styledTitle}>
            Chez vous, partout et ailleurs
          </h2>
        </div>
        <div className={styles.galleryWrapper}>
          {items.map(item => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              cover={item.cover}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
