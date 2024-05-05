import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { ProductCard } from '../ProductCard';

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
		<ProductCard
			imageUrl='https://i.pravatar.cc/150'
			productTitle='Camiseta Insider'
			productDescription='Preta, tamanho P, Gola V'
			productLink='https://www.wbox.com/a672js'
			productTags='roupas'
			productLastUpdate='Last updated 3 mins ago'
		/>,
		<ProductCard
			imageUrl='https://i.pravatar.cc/150'
			productTitle='Livro Ariano Suassuna'
			productDescription='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer'
			productLink='https://www.wbox.com/a672js'
			productTags='livros'
			productLastUpdate='Last updated 7 months ago'
		/>,
		<ProductCard
			imageUrl='https://i.pravatar.cc/150'
			productTitle='Camiseta Insider'
			productDescription='Preta, tamanho P, Gola V'
			productLink='https://www.wbox.com/a672js'
			productTags='roupas'
			productLastUpdate='Last updated 3 mins ago'
		/>,
		<ProductCard
			imageUrl='https://i.pravatar.cc/150'
			productTitle='Livro Ariano Suassuna'
			productDescription='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer'
			productLink='https://www.wbox.com/a672js'
			productTags='livros'
			productLastUpdate='Last updated 7 months ago'
		/>,
		<ProductCard
			imageUrl='https://i.pravatar.cc/150'
			productTitle='Camiseta Insider'
			productDescription='Preta, tamanho P, Gola V'
			productLink='https://www.wbox.com/a672js'
			productTags='roupas'
			productLastUpdate='Last updated 3 mins ago'
		/>,
		<ProductCard
			imageUrl='https://i.pravatar.cc/150'
			productTitle='Livro Ariano Suassuna'
			productDescription='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer'
			productLink='https://www.wbox.com/a672js'
			productTags='livros'
			productLastUpdate='Last updated 7 months ago'
		/>,
		<ProductCard
			imageUrl='https://i.pravatar.cc/150'
			productTitle='Camiseta Insider'
			productDescription='Preta, tamanho P, Gola V'
			productLink='https://www.wbox.com/a672js'
			productTags='roupas'
			productLastUpdate='Last updated 3 mins ago'
		/>,
		<ProductCard
			imageUrl='https://i.pravatar.cc/150'
			productTitle='Livro Ariano Suassuna'
			productDescription='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer'
			productLink='https://www.wbox.com/a672js'
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