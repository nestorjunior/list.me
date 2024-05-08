import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { ProfileForm } from "../../components/ProfileForm";
import { Footer } from "../../components/Footer";

export function Profile() {
	return (
		<>
			<div className="container-fluid">
				<Navbar/>
				<Header height="250px"/>
				<ProfileForm/>
				<Footer />
			</div>
		</>
	)
}