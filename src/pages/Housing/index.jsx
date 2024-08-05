import { useParams } from 'react-router-dom'
import ImageCarousel from '../../components/ImageCarousel'
import StarRating from '../../components/StarRating'
import ExpandableSection from '../../components/ExpandableSection'
import data from '../../data/data.json'
import './housing.css'

const Housing = () => {
  const { id } = useParams()
  const item = data.find((item) => item.id === id)

  if (!item) {
    return <div>Item not found</div>
  }

  const handlePrevClick = () => {
    console.log('Previous Arrow Clicked')
  }

  const handleNextClick = () => {
    console.log('Next Arrow Clicked')
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1240px', margin: '0 auto' }}>
      <ImageCarousel
        images={item.pictures}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
      />
      <div className="header">
        <div className="title-location">
          <h1>{item.title}</h1>
          <p>{item.location}</p>
        </div>
        <div className="host-info">
          <p className="host-name">{item.host.name}</p>
          <img
            src={item.host.picture}
            alt={item.host.name}
            className="host-picture"
          />
        </div>
      </div>
      <div className="tags-rating">
        <ul className="horizontal-list">
          {item.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
        <div className="rating">
          <StarRating rating={item.rating} />
        </div>
      </div>
      <div className="section-container">
        <div className="expandable-section">
          <ExpandableSection
            title="Déscription"
            content={<p>{item.description}</p>}
          />
        </div>
        <div className="expandable-section">
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
  )
}

export default Housing
