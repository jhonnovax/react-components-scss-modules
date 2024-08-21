import React from 'react';
import styles from './firm-facts-button.module.scss';

const FirmFactsButton = ({ disabled, hovered, variant, children }) => {
	const buttonClass = variant === 'default' ? styles.default : styles.icon;
	const hoveredClass = hovered ? styles.hovered : '';

	return (
		<button className={`${styles.firmFactsButton} ${buttonClass} ${hoveredClass}`} disabled={disabled}>
			<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
				<path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14" />
			</svg>
			<span className={styles.text}>{children}</span>
		</button>
	);
};

export default FirmFactsButton;
