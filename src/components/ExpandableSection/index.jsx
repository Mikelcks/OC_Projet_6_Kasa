import React, { useState } from 'react';
import styles from './expandable_section.module.scss';
import vector from '../../assets/arrow_vector.svg';

const ExpandableSection = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.sectionHeader} onClick={() => setIsOpen(!isOpen)}>
        {title}
        <img
          src={vector}
          alt="Toggle Arrow"
          className={`${styles.arrowIcon} ${isOpen ? styles.arrowIconOpen : styles.arrowIconClosed}`}
        />
      </div>
      <div className={`${styles.sectionContent} ${isOpen ? styles.sectionContentOpen : ''}`}>
        {content}
      </div>
    </div>
  );
};

export default ExpandableSection;
