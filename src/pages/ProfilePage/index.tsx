import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Profile } from "../../components/Profile";
import { MainContainer } from "./styles";

export function ProfilePage() {
	return (
		<>
			<div>
				<Navbar />
				<MainContainer>
					<Profile />
				</MainContainer>
				<Footer />
			</div>
		</>
	);
}
