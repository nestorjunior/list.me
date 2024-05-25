import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { ContactUs } from "../../components/ContactUs"
import { MainContainer } from './styles';

export function ContactPage () {
	return(
		<>
			<div className="container-fluid">
				<Navbar/>
				<MainContainer>
					<ContactUs />
				</MainContainer>
				<Footer/>
			</div>
		</>
	)
}