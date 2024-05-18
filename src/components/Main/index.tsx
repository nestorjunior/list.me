import React, { useState, useEffect } from 'react';
import { ProductCard } from '../ProductCard';
import { IconChevronDownCircle } from '../Icons'

import { 
	MainContainer,
	SectionContainer,
	ProductContainer,
	ProductShowMore,
	ProductButtonShowMore,
	CustomStack,
	CustomDivider
} from './styles'

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
			<MainContainer>
				<CustomStack style={{ marginTop: marginTop }}>
					{products .slice(0, showAllProducts ? products.length : 4) .map((product, index) => (
							
						<ProductContainer key={index}>
							{product}
							{/* <CustomDivider variant="middle" /> */}
						</ProductContainer>
					
					))}
				</CustomStack>
			</MainContainer>
			{!showAllProducts && (
				<ProductShowMore className="text-center">
					<ProductButtonShowMore onClick={handleShowMore}>
						<IconChevronDownCircle />
					</ProductButtonShowMore>
				</ProductShowMore>
			)}
		</>
	)
}