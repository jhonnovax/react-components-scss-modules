import React from 'react';
import styles from './firm-facts.module.scss';
import FirmFactCard from './firm-facts-card/firm-facts-card.js';
import FirmFactButton from './firm-facts-button/firm-facts-button.js';

const FirmFacts = () => {
	return (
		<section className={styles.firmFacts}>
			<button className={styles.btnClose}>
				<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24">
					<path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"/>
				</svg>
			</button>

			<h1>Firm Facts</h1>
			<hr />

			<div className={styles.cardsContainer}>
				<FirmFactCard className={styles.featured} variant="default">
					<FirmFactButton variant="icon">
						This is a two line button that terminates with
					</FirmFactButton>
				</FirmFactCard>

				<FirmFactCard className={styles.tile} variant="default">
					<FirmFactButton variant="icon">
						This is a two line button that terminates with
					</FirmFactButton>
				</FirmFactCard>

				<FirmFactCard className={styles.tile} variant="default">
					<FirmFactButton variant="default">
						This is a one line button
					</FirmFactButton>
				</FirmFactCard>

				<FirmFactCard className={styles.tile} variant="default">
					<FirmFactButton variant="icon">
						This is a two line button that terminates with
					</FirmFactButton>
				</FirmFactCard>
				
				<FirmFactCard className={styles.tile} variant="default">
					<FirmFactButton variant="icon">
						This is a two line button that terminates with
					</FirmFactButton>
				</FirmFactCard>

				<FirmFactCard className={styles.tile} variant="default">
					<FirmFactButton variant="icon" disabled={true}>
						This is a two line button that terminates with
					</FirmFactButton>
				</FirmFactCard>

				<FirmFactCard className={styles.tile} variant="border">
					<FirmFactButton variant="icon">
						This is a two line button that terminates with
					</FirmFactButton>
				</FirmFactCard>
			</div>
		</section>
	);
};

export default FirmFacts;