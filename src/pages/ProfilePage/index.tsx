import { Navbar } from "../../components/Navbar";
import { Profile } from "../../components/Profile";
import { MainContainer } from './styles';
import { Footer } from "../../components/Footer";

export function ProfilePage() {
	return (
		<>
			<div className="container-fluid">
				<Navbar/>
				<MainContainer>
					<Profile />
				</MainContainer>
				<Footer/>
			</div>
		</>
	)
}