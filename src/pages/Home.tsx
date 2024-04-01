import { Container } from 'react-bootstrap';
import NavigationBar from '../components/NavigationBar/NavigationBar'
import { Footer } from '../components/Footer/Footer';
import CardHeader from '../components/CardHeader/CardHeader';

import './Home.scss'
import CardProducts from '../components/CardProducts/CardProducts';

export function Home() {
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
						<CardProducts />
						<CardProducts />
					</section>
				</main>
				<footer>
					<Footer />
				</footer>
			</Container>
		</>
	)
}