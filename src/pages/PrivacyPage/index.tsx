import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { PrivacyPolicy } from "../../components/PrivacyPolicy"
import { MainContainer } from './styles';

export function PrivacyPage () {
	return(
		<>
			<div className="container-fluid">
				<Navbar/>
				<MainContainer>
					<PrivacyPolicy />
				</MainContainer>
				<Footer/>
			</div>
		</>
	)
}