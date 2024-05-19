import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Cookies } from "../../components/Cookies"
import { MainContainer } from './styles';

export function CookiesPage () {
	return(
		<>
			<div className="container-fluid">
				<Navbar/>
				<MainContainer>
					<Cookies />
				</MainContainer>
				<Footer/>
			</div>
		</>
	)
}