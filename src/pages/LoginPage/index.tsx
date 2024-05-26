import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Login } from "../../components/Login"
import { MainContainer } from './styles';

export function LoginPage () {
	return(
		<>
			<div>
				<Navbar/>
				<MainContainer>
					<Login />
				</MainContainer>
				<Footer/>
			</div>
		</>
	)
}