
import { Footer } from "../components/Footer";
import { Header } from "../components/Header/Header";
import { Navbar } from "../components/Navbar";
import { Signup } from "../components/Signup/Signup";

export function SignupAccount() {
	return(
		<>
			<div className="container-fluid p-x-0">
				<Navbar/>
				<Header height="250px"/>
				<Signup />
				<Footer/>
			</div>
		</>
	)
}
