import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { MainContainer } from './styles';

export function UserPage() {
	return(
		<>
			<div className="container-fluid">
				<Navbar/>
				<MainContainer>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, aperiam in corporis odit dolorum eligendi facilis placeat dolores aspernatur id iste, ullam quidem voluptatem. Rem, placeat. Eaque a similique reprehenderit?</p>						
				</MainContainer>
				<Footer/>
			</div>
		</>
	)
}