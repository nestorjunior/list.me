import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import '../Main/Main.scss'
import { CardProducts } from '../CardProducts/CardProducts';

export function Main() {
	const [showAllProducts, setShowAllProducts] = useState(false);
	const [marginTop, setMarginTop] = useState('calc(45vh - 550px)');

	useEffect(() => {
		const handleResize = () => {
			const windowHeight = window.innerHeight;
			setMarginTop(`calc(45vh - ${Math.min(550, windowHeight / 2)}px)`);
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handleShowMore = () => {
		setShowAllProducts(true);
	};

	const products = [
		<CardProducts />,
		<CardProducts />,
		<CardProducts />,
		<CardProducts />,
		<CardProducts />,
		<CardProducts />,
		<CardProducts />,
		<CardProducts />,
	];

	return (
		<main className="justify-content-center d-flex">
			<section className='section-list-products-wb' style={{ marginTop: marginTop }}>
				{products
					.slice(0, showAllProducts ? products.length : 4)
					.map((product, index) => (
						<div key={index}>{product}</div>
					))}
				{!showAllProducts && (
					<span className="text-center button-show-more-wb">
						<FontAwesomeIcon icon={faChevronDown} onClick={handleShowMore} className='jumping-icon' />
					</span>
				)}
			</section>
		</main>
	)
}