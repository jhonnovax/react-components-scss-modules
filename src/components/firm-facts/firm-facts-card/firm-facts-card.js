import React, { useState } from 'react';
import styles from './firm-facts-card.module.scss';
import FirmFactButton from '../firm-facts-button/firm-facts-button.js';

const FirmFactsCard = ({ alignTop, disabled, className, variantCard, variantButton, buttonText }) => {
	const [isBtnHovered, setIsBtnHovered] = useState(false);
	const cardClass = variantCard === 'border' ? styles.border : styles.default;

	return (
		<div 
			className={`${className} ${styles.card} ${cardClass}`}
			onMouseEnter={() => setIsBtnHovered(true)}
			onMouseLeave={() => setIsBtnHovered(false)}
		>
			<FirmFactButton disabled={disabled} hovered={isBtnHovered} variant={variantButton}>
				{buttonText}
			</FirmFactButton>
		</div>
	);
};

export default FirmFactsCard;