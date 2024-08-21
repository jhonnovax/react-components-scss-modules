import React from 'react';
import styles from './firm-facts.module.scss';
import FirmFactCard from './firm-facts-card/firm-facts-card.js';

const FirmFacts = () => {
	return (
		<section className={styles.firmFacts}>
			<button className={styles.btnClose}>
				<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path id="Close" fill-rule="evenodd" clip-rule="evenodd" d="M1.0808 0L0 1.08227L20.9192 22.0299L0.0597062 42.9177L1.14051 44L22 23.1122L42.8595 44L43.9403 42.9177L23.0808 22.0299L44 1.08227L42.9192 0L22 20.9476L1.0808 0Z" fill="white"/>
				</svg>
			</button>

			<h1>Firm Facts</h1>
			<hr />

			<div className={styles.cardsContainer}>
				<FirmFactCard 
					className={styles.featured} 
					variantCard="default"
					variantButton="icon"
					buttonText={'This is a two line button that terminates with'}
				/>

				<FirmFactCard 
					variantCard="default"
					variantButton="icon"
					buttonText={'This is a two line button that terminates with'}
				/>

				<FirmFactCard 
					variantCard="default"
					variantButton="default"
					buttonText={'This is a one line button'}
				/>

				<FirmFactCard 
					variantCard="default"
					variantButton="icon"
					buttonText={'This is a two line button that terminates with'}
				/>

				<FirmFactCard 
					alignTop={true}
					variantCard="border"
					variantButton="icon"
					buttonText={'This is a two line button that terminates with'}
				/>

				<FirmFactCard 
					alignTop={true}
					disabled={true}
					variantCard="border"
					variantButton="icon"
					buttonText={'This is a two line button that terminates with'}
				/>

				<FirmFactCard 
					alignTop={true}
					variantCard="border"
					variantButton="icon"
					buttonText={'This is a two line button that terminates with'}
				/>

			</div>
		</section>
	);
};

export default FirmFacts;