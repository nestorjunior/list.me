import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { MainContainer } from './styles';
import { Help } from "../../components/Help";

export function HelpCenterPage () {
	return(
		<>
			<div className="container-fluid">
				<Navbar/>
				<MainContainer>
					<Help />
				</MainContainer>
				<Footer/>
			</div>
		</>
	)
}