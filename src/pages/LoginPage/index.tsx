import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { Login } from "../../components/Login"
import { MainContainer } from './styles';

export function LoginPage () {
	return(
		<>
			<div className="container-fluid">
				<Navbar/>
				<Header height="">
					<MainContainer>
						<Login />
					</MainContainer>
				</Header>
				{/* <Footer/> */}
			</div>
		</>
	)
}