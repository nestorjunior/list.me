import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { Profile } from "../../components/Profile";
import { Footer } from "../../components/Footer";

export function ProfilePage() {
	return (
		<>
			<div className="container-fluid">
				<Navbar/>
				<Header height="250px"/>
				<Profile/>
				<Footer />
			</div>
		</>
	)
}