
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { Signup } from "../../components/Signup";
import { MainContainer } from './styles';

export function SignupPage() {
	return(
		<>
			<div className="container-fluid">
				<Navbar/>
				<Header height="">
					<MainContainer>
						<Signup />
					</MainContainer>
				</Header>
				{/* <Footer/> */}
			</div>
		</>
	)
}
