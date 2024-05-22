import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Login } from "../../components/Login"
import { MainContainer } from './styles';

export function LoginPage () {
	return(
		<>
			<div className="container-fluid px-0">
				<Navbar/>
				<MainContainer>
					<Login />
				</MainContainer>
				<Footer/>
			</div>
		</>
	)
}