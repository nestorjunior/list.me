import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { About } from "../../components/About"
import { MainContainer } from './styles';

export function AboutPage () {
	return(
		<>
			<div className="container-fluid">
				<Navbar/>
				<MainContainer>
					<About />
				</MainContainer>
				<Footer/>
			</div>
		</>
	)
}