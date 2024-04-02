import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Footer } from '../components/Footer/Footer'
import CardHeader from '../components/CardHeader/CardHeader'
import CardProducts from '../components/CardProducts/CardProducts';
import NavigationBar from '../components/NavigationBar/NavigationBar'
import { CiCircleChevDown } from "react-icons/ci";
import './Home.scss'
export function Home() {

	const [showAllProducts, setShowAllProducts] = useState(false)

	const handleShowMore = () => {
		setShowAllProducts(true)
	}

	const products = [
		<CardProducts />,
		<CardProducts />,
		<CardProducts />,
		<CardProducts />,
		<CardProducts />,
		<CardProducts />,
		<CardProducts />,
	]

	return (
		<>
			<Container fluid className='container-wb p-0'>
				<NavigationBar />
				<header>
					<Container className='container-wb__title p-0' style={{ width: '900px' }}>
						<h1 className="text-left title-wb">Wishbox® | <span>Share, connect, gift</span></h1>
					</Container>
					<CardHeader />
				</header>
				<main className='mb-3 justify-content-center d-flex'>
					<section>
						{ products.slice(0, showAllProducts ? products.length : 4).map((product, index) => (
								<div key={index}>
									{product}
								</div>
						)) }
						<span className="text-center mb-3">
							{!showAllProducts && (
									<CiCircleChevDown size={50} onClick={handleShowMore} className="button-show-more-wb" />
							)}
						</span>
					</section>
				</main>
			</Container>
			<Footer />
		</>
	)
}