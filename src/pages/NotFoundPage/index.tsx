import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { NotFound } from "../../components/NotFound"
import { MainContainer } from './styles';

export function NotFoundPage () {
	return(
		<>
			<div className="container-fluid">
				<Navbar/>
				<MainContainer>
					<NotFound />
				</MainContainer>
				<Footer/>
			</div>
		</>
	)
}