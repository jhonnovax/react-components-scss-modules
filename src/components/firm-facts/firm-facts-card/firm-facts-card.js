import React from 'react';
import styles from './firm-facts-card.module.scss';

const FirmFactsCard = ({ className, variant }) => {
  const cardClass = variant === 'border' ? styles.border : styles.default;

  return (
    <div className={`${className} ${styles.card} ${cardClass}`}>
      <h2>Title</h2>
      <p>Description</p>
    </div>
  );
};

export default FirmFactsCard;