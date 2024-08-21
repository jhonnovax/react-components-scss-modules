import React from 'react';
import styles from './firm-facts-card.module.scss';

const FirmFactsCard = ({ className, variant, children }) => {
	const cardClass = variant === 'border' ? styles.border : styles.default;

	return (
		<div className={`${className} ${styles.card} ${cardClass}`}>
			{children}
		</div>
	);
};

export default FirmFactsCard;