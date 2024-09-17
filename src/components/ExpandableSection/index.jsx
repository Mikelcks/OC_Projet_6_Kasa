import React, { useState, useRef } from 'react';
import styles from './expandable_section.module.scss';
import vector from '../../assets/arrow_vector.svg';

const ExpandableSection = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState('0px');
  const contentRef = useRef(null);

  const toggleSection = () => {
    setIsOpen(!isOpen);
    setContentHeight(!isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
  };

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.sectionHeader} onClick={toggleSection}>
        {title}
        <img
          src={vector}
          alt="Toggle Arrow"
          className={`${styles.arrowIcon} ${isOpen ? styles.arrowIconOpen : styles.arrowIconClosed}`}
        />
      </div>
      <div
        ref={contentRef}
        className={`${styles.sectionContent} ${isOpen ? styles.sectionContentOpen : ''}`}
        style={{ height: contentHeight }}
      >
        {content}
      </div>
    </div>
  );
};

export default ExpandableSection;
