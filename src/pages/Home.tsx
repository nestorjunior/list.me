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
						<CardProducts />
						<CardProducts />
						<CardProducts />
						<CardProducts />
						
						{showAllProducts && (
							<>
								<CardProducts />
								<CardProducts />
								<CardProducts />
								<CardProducts />
							</>
						)}
						<footer className="text-center mb-3">
						{!showAllProducts && (
								<CiCircleChevDown size={50} onClick={handleShowMore} className="button-show-more-wb" />
						)}
					</footer>
					</section>
				</main>
				<footer>
					<Footer />
				</footer>
			</Container>
		</>
	)
}