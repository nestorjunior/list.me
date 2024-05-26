
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Signup } from "../../components/Signup";
import { MainContainer } from './styles';

export function SignupPage() {
	return(
		<>
			<div>
				<Navbar/>
				<MainContainer>
					<Signup />
				</MainContainer>
				<Footer/>
			</div>
		</>
	)
}
