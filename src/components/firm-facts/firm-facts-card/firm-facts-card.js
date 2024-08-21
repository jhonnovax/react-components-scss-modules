import React, { useState } from 'react';
import styles from './firm-facts-card.module.scss';
import FirmFactButton from '../firm-facts-button/firm-facts-button.js';

const FirmFactsCard = ({ disabled, className, variantCard, variantButton, buttonText }) => {
	const [isBtnHovered, setIsBtnHovered] = useState(false);
	const cardClass = variantCard === 'border' ? styles.border : styles.default;
	const disabledClass = disabled ? styles.disabled : '';

	return (
		<div 
			className={`${className} ${styles.card} ${cardClass} ${disabledClass}`}
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