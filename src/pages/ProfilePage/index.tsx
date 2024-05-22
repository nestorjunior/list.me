import { Navbar } from "../../components/Navbar";
import { Profile } from "../../components/Profile";
import { MainContainer } from './styles';
import { Footer } from "../../components/Footer";

export function ProfilePage() {
	return (
		<>
			<div className="container-fluid px-0">
				<Navbar/>
				<MainContainer>
					<Profile />
				</MainContainer>
				<Footer/>
			</div>
		</>
	)
}