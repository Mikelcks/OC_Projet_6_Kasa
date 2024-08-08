import React from 'react';
import ExpandableSection from '../../components/ExpandableSection';
import styles from './about.module.scss';

function About() {
  const categories = [
    { name: 'Fiabilité', text: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.' },
    { name: 'Respect', text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
    { name: 'Service', text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
    { name: 'Sécurité', text: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipe de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.' }
  ];

  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.aboutContainer}>
        <div className={styles.titleWrapper}></div>
        <div className={styles.galleryWrapper}>
          {categories.map((category, index) => (
            <ExpandableSection 
              key={index}
              title={category.name}
              content={<p>{category.text}</p>} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
