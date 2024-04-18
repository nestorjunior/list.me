import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { CardProduct } from '../ProductCard/ProductCard';

import '../Content/Content.scss'

export function Content() {
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
		<CardProduct
			imageUrl='https://picsum.photos/id/1/150/150'
			productTitle='Camiseta Insider'
			productDescription='Preta, tamanho P, Gola V'
			productLink='https://www.insiderstore.com.br/products/tech-t-shirt?variant=43168998293653'
			productTags='roupas'
			productLastUpdate='Last updated 3 mins ago'
		/>,
		<CardProduct
			imageUrl='https://picsum.photos/id/7/150/150'
			productTitle='Livro Ariano Suassuna'
			productDescription='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer'
			productLink='https://www.insiderstore.com.br/products/tech-t-shirt?variant=43168998293653'
			productTags='livros'
			productLastUpdate='Last updated 7 months ago'
		/>,
	];

	return (
		<>
			<main className="wbox-content-container justify-content-center d-flex">
				<section className='wbox-content-container__section' style={{ marginTop: marginTop }}>
					{products .slice(0, showAllProducts ? products.length : 4) .map((product, index) => (
							
						<div className='wbox-content-container__product' key={index}>{product}
							<hr className='wbox-content-container__divider'/>
						</div>
					
					))}
				</section>
			</main>
			{!showAllProducts && (
				<span className="text-center wbox-content-container__button--more">
					<FontAwesomeIcon icon={faChevronDown} onClick={handleShowMore} className='wbox-content-container__button--animation' />
				</span>
			)}
		</>
	)
}