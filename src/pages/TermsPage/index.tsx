import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Terms } from "../../components/Terms"
import { MainContainer } from './styles';

export function TermsPage () {
	return(
		<>
			<div className="container-fluid">
				<Navbar/>
				<MainContainer>
					<Terms />
				</MainContainer>
				<Footer/>
			</div>
		</>
	)
}