
import { Footer } from "../components/Footer";
import { Header } from "../components/Header/Header";
import { Navbar } from "../components/Navbar";
import { SignupForm } from "../components/SignupForm";

export function SignupAccount() {
	return(
		<>
			<div className="container-fluid p-x-0">
				<Navbar/>
				<Header height="250px"/>
				<SignupForm />
				<Footer/>
			</div>
		</>
	)
}
