import React from 'react';
import { useParams } from 'react-router-dom';
import ImageCarousel from '../../components/ImageCarousel';
import data from '../../data/data.json';

const Housing = () => {
  const { id } = useParams();
  const item = data.find((item) => item.id === id);

  if (!item) {
    return <div>Item not found</div>;
  }

  const handlePrevClick = () => {
    console.log('Previous Arrow Clicked');
  };

  const handleNextClick = () => {
    console.log('Next Arrow Clicked');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1240px', margin: '0 auto'  }}>
      <h1>{item.title}</h1>
      <ImageCarousel
        images={item.pictures}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
      />
      <p>{item.description}</p>
      <p>Location: {item.location}</p>
      <p>Rating: {item.rating}</p>
      <p>Host: {item.host.name}</p>
      <img src={item.host.picture} alt={item.host.name} style={{ width: '100px', borderRadius: '50%' }} />
      <h2>Equipments:</h2>
      <ul>
        {item.equipments.map((equip, index) => (
          <li key={index}>{equip}</li>
        ))}
      </ul>
      <h2>Tags:</h2>
      <ul>
        {item.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default Housing;