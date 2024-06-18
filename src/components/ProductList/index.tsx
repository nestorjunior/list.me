import { useState } from "react";
import { ProductCard } from "../ProductCard";

import {
	ProductButtonShowMore,
	ProductContainer,
	ProductShowMore,
	StyledExpandCircleDownIcon,
} from "./styles";

export function ProductList() {
	const [showAllProducts, setShowAllProducts] = useState(false);

	const handleShowMoreProducts = () => {
		setShowAllProducts(true);
	};

	const products = [
		{
			id: 1,
			content: (
				<ProductCard
					imageUrl="https://i.pravatar.cc/150"
					productTitle="Camiseta Hering gola V"
					productDescription="Preta, tamanho P, Gola V"
					productLink="https://www.wbox.com/a672js"
					productTags="roupas"
					productLastUpdate="Last updated 3 mins ago"
				/>
			),
		},
		{
			id: 2,
			content: (
				<ProductCard
					imageUrl="https://i.pravatar.cc/150"
					productTitle="Livro Érico Veríssimo"
					productDescription="This is a wider card with supporting text below as a natural lead-in to additional content."
					productLink="https://www.wbox.com/a672js"
					productTags="livros"
					productLastUpdate="Last updated 7 months ago"
				/>
			),
		},
		{
			id: 3,
			content: (
				<ProductCard
					imageUrl="https://i.pravatar.cc/150"
					productTitle="Cuia de chimarrão + bomba"
					productDescription="Cuia modelo coquinho clara"
					productLink="https://www.wbox.com/a672js"
					productTags="roupas"
					productLastUpdate="Last updated 3 mins ago"
				/>
			),
		},
		{
			id: 4,
			content: (
				<ProductCard
					imageUrl="https://i.pravatar.cc/150"
					productTitle="iPhone XR"
					productDescription="Text below as a natural lead-in to additional content."
					productLink="https://www.wbox.com/a672js"
					productTags="mobile"
					productLastUpdate="Last updated 7 months ago"
				/>
			),
		},
		{
			id: 5,
			content: (
				<ProductCard
					imageUrl="https://i.pravatar.cc/150"
					productTitle="Camiseta Insider"
					productDescription="Preta, tamanho P, Gola V"
					productLink="https://www.wbox.com/a672js"
					productTags="roupas"
					productLastUpdate="Last updated 3 mins ago"
				/>
			),
		},
	];

	return (
		<>
			{products
				.slice(0, showAllProducts ? products.length : 4)
				.map((product) => (
					<ProductContainer key={product.id}>
						{product.content}
					</ProductContainer>
				))}
			{products.length > 0 && !showAllProducts && (
				<ProductShowMore className="text-center">
					<ProductButtonShowMore onClick={handleShowMoreProducts}>
						<StyledExpandCircleDownIcon />
					</ProductButtonShowMore>
				</ProductShowMore>
			)}
		</>
	);
}
