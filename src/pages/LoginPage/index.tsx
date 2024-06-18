import { Footer } from "../../components/Footer";
import { Login } from "../../components/Login";
import { Navbar } from "../../components/Navbar";
import { MainContainer } from "./styles";

export function LoginPage() {
	return (
		<>
			<div>
				<Navbar />
				<MainContainer>
					<Login />
				</MainContainer>
				<Footer />
			</div>
		</>
	);
}
